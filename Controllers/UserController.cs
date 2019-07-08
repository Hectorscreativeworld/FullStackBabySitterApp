using System;
using System.Security.Cryptography;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FullStackTheSafeSitterApp;
using FullStackTheSafeSitterApp.Models;

namespace sdg_react_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public UserController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/User
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
      return await _context.Users.ToListAsync();
    }

    // GET: api/User/5
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
      var user = await _context.Users.FindAsync(id);

      if (user == null)
      {
        return NotFound();
      }

      return user;
    }

    // PUT: api/User/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(int id, User user)
    {
      if (id != user.Id)
      {
        return BadRequest();
      }

      _context.Entry(user).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UserExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/User
    [HttpPost]
    public async Task<ActionResult<User>> PostUser(User user)
    {
      var exits = await _context.Users.AnyAsync(u => u.UserName == user.UserName || u.Email == user.Email);
      // if exists, return an error
      if (exits)
      {
        return BadRequest(new { message = "User with the email already exists" });
      }
      user.Password = GetHashString(user.Password);
      _context.Users.Add(user);

      await _context.SaveChangesAsync();
      if (user.IsParent)
      {
        _context.Parents.Add(new Parent
        {
          UserId = user.Id
        });
      }
      else
      {
        _context.BabySitters.Add(new BabySitter
        {
          UserId = user.Id
        });
      }
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetUser", new { id = user.Id }, user);
    }

    public static byte[] GetHash(string inputString)
    {
      HashAlgorithm algorithm = SHA256.Create();
      return algorithm.ComputeHash(Encoding.UTF8.GetBytes(inputString));
    }

    public static string GetHashString(string inputString)
    {
      StringBuilder sb = new StringBuilder();
      foreach (byte b in GetHash(inputString))
        sb.Append(b.ToString("X2"));

      return sb.ToString();
    }

    // DELETE: api/User/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<User>> DeleteUser(int id)
    {
      var user = await _context.Users.FindAsync(id);
      if (user == null)
      {
        return NotFound();
      }

      _context.Users.Remove(user);
      await _context.SaveChangesAsync();

      return user;
    }

    private bool UserExists(int id)
    {
      return _context.Users.Any(e => e.Id == id);
    }
  }
}
