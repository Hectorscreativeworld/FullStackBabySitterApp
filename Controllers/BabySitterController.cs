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
            return await _context.BabySitters.ToListAsync();
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

        // PUT: api/BabySitter/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBabySitter(int id, BabySitter babySitter)
        {
            if (id != babySitter.Id)
            {
                return BadRequest();
            }

            _context.Entry(babySitter).State = EntityState.Modified;

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
