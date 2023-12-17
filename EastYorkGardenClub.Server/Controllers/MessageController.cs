using EastYorkGardenClub.Server.Data.DTOs;
using EastYorkGardenClub.Server.Data;
using EastYorkGardenClub.Server.Entity;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EastYorkGardenClub.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowWebApp")]
    public class MessageController : ControllerBase
    {
        private readonly EYGCDbContext _context;

        public MessageController(EYGCDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessages()
        {
            var messages = await _context.Messages
                                .OrderByDescending(m => m.MessageDate)
                                .Select(m => new MessageListDTO
                                {
                                    ID = m.ID,
                                    Name = m.Name,
                                    Date = m.MessageDate
                                })
                                .ToListAsync();

            return Ok(messages);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessage(Guid id)
        {
            var messageEntity = await _context.Messages
                                .FirstOrDefaultAsync(m => m.ID == id);

            if (messageEntity != null)
            {
                var messageDTO = new MessageDTO
                {
                    ID = messageEntity.ID,
                    Name = messageEntity.Name,
                    MessageDate = messageEntity.MessageDate,
                    MessageText = messageEntity.MessageText,
                    Email = messageEntity.Email,
                };

                return Ok(messageDTO);
            }
            else
            {
                return NotFound();
            }

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessage(Guid id)
        {
            var message = await _context.Messages.FindAsync(id);
            if (message == null)
            {
                return NotFound();
            }

            _context.Messages.Remove(message);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> PostMessage([FromBody] MessageViewModel messageDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            
            var message = new Message
            {
                ID = Guid.NewGuid(),
                Name = messageDto.Name,
                Email = messageDto.Email,
                MessageText = messageDto.MessageText,
                MessageDate = messageDto.MessageDate
            };
            
            _context.Messages.Add(message);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMessage), new { id = message.ID }, message);
        }

        public class MessageViewModel
        {
            public required string Name { get; set; }
            public required string Email { get; set; }
            public required string MessageText { get; set; }
            public required DateTime MessageDate { get; set; }
        }
    }
}
