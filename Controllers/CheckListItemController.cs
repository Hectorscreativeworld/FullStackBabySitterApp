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
    public class CheckListItemController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public CheckListItemController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/CheckListItem
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CheckListItem>>> GetCheckListItem()
        {
            return await _context.CheckListItem.ToListAsync();
        }

        // GET: api/CheckListItem/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CheckListItem>> GetCheckListItem(int id)
        {
            var checkListItem = await _context.CheckListItem.FindAsync(id);

            if (checkListItem == null)
            {
                return NotFound();
            }

            return checkListItem;
        }

        // PUT: api/CheckListItem/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCheckListItem(int id, CheckListItem checkListItem)
        {
            if (id != checkListItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(checkListItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckListItemExists(id))
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

        // POST: api/CheckListItem
        [HttpPost]
        public async Task<ActionResult<CheckListItem>> PostCheckListItem(CheckListItem checkListItem)
        {
            _context.CheckListItem.Add(checkListItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCheckListItem", new { id = checkListItem.Id }, checkListItem);
        }

        // DELETE: api/CheckListItem/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CheckListItem>> DeleteCheckListItem(int id)
        {
            var checkListItem = await _context.CheckListItem.FindAsync(id);
            if (checkListItem == null)
            {
                return NotFound();
            }

            _context.CheckListItem.Remove(checkListItem);
            await _context.SaveChangesAsync();

            return checkListItem;
        }

        private bool CheckListItemExists(int id)
        {
            return _context.CheckListItem.Any(e => e.Id == id);
        }
    }
}
