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
    public class EmergencyContactController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public EmergencyContactController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/EmergencyContact
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmergencyContact>>> GetEmergencyContacts()
        {
            return await _context.EmergencyContacts.ToListAsync();
        }

        // GET: api/EmergencyContact/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmergencyContact>> GetEmergencyContact(int id)
        {
            var emergencyContact = await _context.EmergencyContacts.FindAsync(id);

            if (emergencyContact == null)
            {
                return NotFound();
            }

            return emergencyContact;
        }

        // PUT: api/EmergencyContact/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmergencyContact(int id, EmergencyContact emergencyContact)
        {
            if (id != emergencyContact.Id)
            {
                return BadRequest();
            }

            _context.Entry(emergencyContact).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmergencyContactExists(id))
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

        // POST: api/EmergencyContact
        [HttpPost]
        public async Task<ActionResult<EmergencyContact>> PostEmergencyContact(EmergencyContact emergencyContact)
        {
            _context.EmergencyContacts.Add(emergencyContact);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmergencyContact", new { id = emergencyContact.Id }, emergencyContact);
        }

        // DELETE: api/EmergencyContact/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmergencyContact>> DeleteEmergencyContact(int id)
        {
            var emergencyContact = await _context.EmergencyContacts.FindAsync(id);
            if (emergencyContact == null)
            {
                return NotFound();
            }

            _context.EmergencyContacts.Remove(emergencyContact);
            await _context.SaveChangesAsync();

            return emergencyContact;
        }

        private bool EmergencyContactExists(int id)
        {
            return _context.EmergencyContacts.Any(e => e.Id == id);
        }
    }
}
