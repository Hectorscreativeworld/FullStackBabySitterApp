using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FullStackTheSafeSitterApp;
using FullStackTheSafeSitterApp.Models;
using FullStackTheSafeSitterApp.ViewModel;

namespace sdg_react_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class BabySitterController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public BabySitterController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/BabySitter
    [HttpGet]
    public async Task<ActionResult<IEnumerable<BabySitter>>> GetBabySitters()
    {
      return await _context.BabySitters.Include(x => x.User).ToListAsync();
    }

    // GET: api/BabySitter
    [HttpGet("jobs/{id}")]
    public async Task<ActionResult<IEnumerable<BabySittingJob>>> GetBabySittingJobs(int id)
    {
      var jobs = await _context.BabySittingJobs.Where(x => x.BabysitterID == id).Include(x => x.BabySitter).Include(y => y.Child).ToListAsync();
      if (jobs == null)
      {
        return NotFound();
      }
      return jobs;
    }

    // GET: api/BabySitter
    [HttpGet("job/{id}")]
    public async Task<ActionResult<BabySittingJob>> GetBabySittingJob(int id)
    {
      var jobs = await _context.BabySittingJobs.Where(x => x.Id == id).Include(x => x.BabySitter).Include(y => y.Child).ToListAsync();
      if (jobs == null || jobs.Count < 1)
      {
        return NotFound();
      }
      return jobs.First();
    }

    // PUT: api/Babysitter/updateChildStatus/5
    [HttpPatch("updateChildStatus/{childId}")]
    public async Task<IActionResult> UpdateChildStatus(int childId, Child child)
    {
      if (childId != child.Id)
      {
        return BadRequest();
      }

      var actualChild = _context.Children.FirstOrDefault(x => x.Id == childId);
      try
      {
        actualChild.CurrentStatus = child.CurrentStatus;
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (actualChild == null)
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

    // GET: api/BabySitter/5
    [HttpGet("{id}")]
    public async Task<ActionResult<BabySitter>> GetBabySitter(int id)
    {
      var babySitter = await _context.BabySitters.FindAsync(id);

      if (babySitter == null)
      {
        return NotFound();
      }

      return babySitter;
    }

    // GET: api/BabySitter/5
    [HttpGet("userid/{id}")]
    public ActionResult<BabySitter> GetBabySitterByUserId(int id)
    {
      var babySitter = _context.BabySitters.Include(x => x.User).FirstOrDefault(bs => bs.UserId == id);

      if (babySitter == null)
      {
        return NotFound();
      }

      return babySitter;
    }

    // PUT: api/BabySitter/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBabySitter(int id, BabySitter babySitter)
    {
      if (id != babySitter.Id)
      {
        _context.BabySitters.Add(babySitter);
        await _context.SaveChangesAsync();
        return NoContent();
      }

      // _context.Entry(babySitter).State = EntityState.Modified;
      var _babySitter = await _context.BabySitters.FirstAsync(f => f.Id == babySitter.Id);
      _babySitter.PaymentType = babySitter.PaymentType;
      _babySitter.Photo = babySitter.Photo;
      _babySitter.TheBioInformation = babySitter.TheBioInformation;


      var user = await _context.Users.FirstAsync(x => x.Id == babySitter.User.Id);
      if (user != null)
      {
        user.Phone = babySitter.User.Phone;
        user.Email = babySitter.User.Email;
        user.FirstName = babySitter.User.FirstName;
        user.LastName = babySitter.User.LastName;
      }
      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!BabySitterExists(id))
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

    // POST: api/BabySitter
    [HttpPost]
    public async Task<ActionResult<BabySitter>> PostBabySitter(BabySitter babySitter)
    {
      _context.BabySitters.Add(babySitter);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetBabySitter", new { id = babySitter.Id }, babySitter);
    }

    // POST: api/BabySitter/Job
    [HttpPost("job")]
    public async Task<ActionResult<BabySittingJob>> PostBabySitterJob(BabySittingJob babySittingJob)
    {
      _context.BabySittingJobs.Add(babySittingJob);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetBabySittingJob", new { id = babySittingJob.Id }, babySittingJob);
    }

    [HttpPost("login")]
    public async Task<ActionResult> LoginIn()
    {
      return Ok();
    }



    // DELETE: api/BabySitter/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<BabySitter>> DeleteBabySitter(int id)
    {
      var babySitter = await _context.BabySitters.FindAsync(id);
      if (babySitter == null)
      {
        return NotFound();
      }

      _context.BabySitters.Remove(babySitter);
      await _context.SaveChangesAsync();

      return babySitter;
    }

    private bool BabySitterExists(int id)
    {
      return _context.BabySitters.Any(e => e.Id == id);
    }
  }
}
