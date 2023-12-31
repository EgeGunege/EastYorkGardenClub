using EastYorkGardenClub.Server.Data;
using EastYorkGardenClub.Server.Data.DTOs;
using EastYorkGardenClub.Server.Entity;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace EastYorkGardenClub.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowWebApp")]
    public class FlowerShowController : ControllerBase
    {
        private readonly EYGCDbContext _context;
        public FlowerShowController(EYGCDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FlowerShow>>> GetShows()
        {
            var shows = await _context.Shows
                                .OrderByDescending(s => s.Date)
                                .Select(s => new FlowerShowDTO
                                {
                                    ID = s.ID,
                                    Name = s.Name,
                                    Date = s.Date,
                                    ShowDescription = s.ShowDescription
                                })
                                .ToListAsync();

            return Ok(shows);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPdf(Guid id)
        {
            var show = await _context.Shows
                                           .FirstOrDefaultAsync(s => s.ID == id);

            if (show == null || show.ShowFileData == null)
            {
                return NotFound();
            }

            var stream = new MemoryStream(show.ShowFileData);

            return File(stream, show.ShowFileContentType!, show.Name);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShows(Guid id)
        {
            var show = await _context.Shows.FindAsync(id);
            if (show == null)
            {
                return NotFound();
            }

            _context.Shows.Remove(show);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> PostShow([FromForm] ShowsViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var show = new FlowerShow
            {
                ID = Guid.NewGuid(),
                Name = model.Name,
                Date = model.Date,
                ShowDescription = model.ShowDescription
            };

            if (model.File != null)
            {
                using (var memoryStream = new MemoryStream())
                {
                    await model.File.CopyToAsync(memoryStream);
                    show.ShowFileData = memoryStream.ToArray();
                    show.ShowFileContentType = model.File.ContentType;
                }
            }

            _context.Shows.Add(show);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNewsletter", new { id = show.ID }, show);
        }
        public class ShowsViewModel
        {
            public required string Name { get; set; }
            public required IFormFile File { get; set; }
            public required string ShowDescription { get; set; }
            public required DateTime Date { get; set; }
        }
    }
}
