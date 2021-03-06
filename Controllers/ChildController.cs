using System;
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
  public class ChildController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public ChildController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Child
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Child>>> GetChildren()
    {
      return await _context.Children.Include(x => x.Parent).ToListAsync();
    }

    // GET: api/Child/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Child>> GetChild(int id)
    {
      var child = await _context.Children.Include(x => x.CheckList).FirstOrDefaultAsync(x => x.Id == id);

      if (child == null)
      {
        return NotFound();
      }

      return child;
    }

    // GET: api/Child/5
    [HttpGet("all/{id}")]
    public async Task<ActionResult<List<Child>>> GetAll(int id)
    {
      var parent = await _context.Parents.FirstOrDefaultAsync(f => f.UserId == id);

      var child = _context.Children.Include(x => x.CheckList).Where(x => x.ParentId == parent.Id);

      if (child == null)
      {
        return NotFound();
      }

      return await child.ToListAsync();
    }

    // PUT: api/Child/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutChild(int id, Child child)
    {
      if (id != child.Id)
      {
        return BadRequest();
      }

      _context.Entry(child).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ChildExists(id))
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




    // POST: api/Child
    [HttpPost]
    public async Task<ActionResult<Child>> PostChild(Child child)
    {
      try
      {
        // We need the parent Id but have the userId
        var parent = await _context.Parents.FirstOrDefaultAsync(f => f.UserId == child.ParentId);
        child.ParentId = parent.Id;
        _context.Children.Add(child);
        await _context.SaveChangesAsync();
      }
      catch (Exception e)
      {
        Console.WriteLine("!!!!!error" + e.ToString());
      }



      return CreatedAtAction("GetChild", new { id = child.Id }, child);
    }

    // DELETE: api/Child/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Child>> DeleteChild(int id)
    {
      var child = await _context.Children.FindAsync(id);
      if (child == null)
      {
        return NotFound();
      }

      _context.Children.Remove(child);
      await _context.SaveChangesAsync();

      return child;
    }

    private bool ChildExists(int id)
    {
      return _context.Children.Any(e => e.Id == id);
    }
  }
}
