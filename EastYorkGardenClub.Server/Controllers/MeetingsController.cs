using EastYorkGardenClub.Server.Data;
using EastYorkGardenClub.Server.Data.DTOs;
using EastYorkGardenClub.Server.Entity;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EastYorkGardenClub.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowWebApp")]
    public class MeetingsController : ControllerBase
    {
        private readonly EYGCDbContext _context;

        public MeetingsController(EYGCDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Meeting>>> GetMeetings()
        {
            var meetings = await _context.Meetings
                                .OrderByDescending(m => m.Date)
                                .Take(6)
                                .Select(m => new MeetingDTO
                                {
                                    ID = m.ID,
                                    Title = m.Title,
                                    Date = m.Date,
                                    Speaker = m.Speaker,
                                    ReadMoreLink = m.ReadMoreLink,
                                    ImageData = m.ImageData != null ? Convert.ToBase64String(m.ImageData) : null,
                                    ImageContentType = m.ImageContentType
                                })
                                .ToListAsync();

            return Ok(meetings);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMeeting(Guid id)
        {
            var meeting = await _context.Meetings.FindAsync(id);
            if (meeting == null)
            {
                return NotFound();
            }

            _context.Meetings.Remove(meeting);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> PostMeeting([FromForm] MeetingViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var meeting = new Meeting
            {
                ID = Guid.NewGuid(),
                Title = model.Title,
                Date = model.Date,
                ReadMoreLink = model.ReadMoreLink,
                Speaker = model.Speaker,
            };

            if (model.Image != null)
            {
                using (var memoryStream = new MemoryStream())
                {
                    await model.Image.CopyToAsync(memoryStream);
                    meeting.ImageData = memoryStream.ToArray();
                    meeting.ImageContentType = model.Image.ContentType;
                }
            }

            _context.Meetings.Add(meeting);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMeetings), new { id = meeting.ID }, meeting);
        }

        public class MeetingViewModel
        {
            public string Title { get; set; }
            public DateTime Date { get; set; }
            public IFormFile Image { get; set; }
            public string ReadMoreLink { get; set; }
            public string Speaker { get; set; }
        }
    }
}
