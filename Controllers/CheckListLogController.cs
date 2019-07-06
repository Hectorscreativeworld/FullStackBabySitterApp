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
    public class CheckListLogController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public CheckListLogController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/CheckListLog
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CheckListLog>>> GetCheckListLog()
        {
            return await _context.CheckListLog.ToListAsync();
        }

        // GET: api/CheckListLog/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CheckListLog>> GetCheckListLog(int id)
        {
            var checkListLog = await _context.CheckListLog.FindAsync(id);

            if (checkListLog == null)
            {
                return NotFound();
            }

            return checkListLog;
        }

        // PUT: api/CheckListLog/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCheckListLog(int id, CheckListLog checkListLog)
        {
            if (id != checkListLog.Id)
            {
                return BadRequest();
            }

            _context.Entry(checkListLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckListLogExists(id))
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

        // POST: api/CheckListLog
        [HttpPost]
        public async Task<ActionResult<CheckListLog>> PostCheckListLog(CheckListLog checkListLog)
        {
            _context.CheckListLog.Add(checkListLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCheckListLog", new { id = checkListLog.Id }, checkListLog);
        }

        // DELETE: api/CheckListLog/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CheckListLog>> DeleteCheckListLog(int id)
        {
            var checkListLog = await _context.CheckListLog.FindAsync(id);
            if (checkListLog == null)
            {
                return NotFound();
            }

            _context.CheckListLog.Remove(checkListLog);
            await _context.SaveChangesAsync();

            return checkListLog;
        }

        private bool CheckListLogExists(int id)
        {
            return _context.CheckListLog.Any(e => e.Id == id);
        }
    }
}
