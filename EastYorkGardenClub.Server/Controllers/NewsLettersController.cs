using System.IO;
using System.Net.Http.Headers;
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
    public class NewsLettersController : ControllerBase
    {
        private readonly EYGCDbContext _context;
        public NewsLettersController(EYGCDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewsLetter>>> GetNewsletterList()
        {
            var newsletters = await _context.NewsLetters
                                .OrderByDescending(n => n.UploadDate)
                                .Select(n => new NewsLettersDTO
                                {
                                    ID = n.ID,
                                    Name = n.Name
                                })
                                .ToListAsync();

            return Ok(newsletters);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPdf(Guid id)
        {
            var newsletter = await _context.NewsLetters
                                           .FirstOrDefaultAsync(n => n.ID == id);

            if (newsletter == null || newsletter.FileData == null)
            {
                return NotFound();
            }

            var stream = new MemoryStream(newsletter.FileData);

            return File(stream, newsletter.FileContentType, newsletter.Name);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNews(Guid id)
        {
            var news = await _context.NewsLetters.FindAsync(id);
            if (news == null)
            {
                return NotFound();
            }

            _context.NewsLetters.Remove(news);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> PostNewsletter([FromForm] NewsLetterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newsletter = new NewsLetter
            {
                ID = Guid.NewGuid(),
                Name = model.Name,
                UploadDate = DateTime.UtcNow
            };

            if (model.File != null)
            {
                using (var memoryStream = new MemoryStream())
                {
                    await model.File.CopyToAsync(memoryStream);
                    newsletter.FileData = memoryStream.ToArray();
                    newsletter.FileContentType = model.File.ContentType;
                }
            }

            _context.NewsLetters.Add(newsletter);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNewsletter", new { id = newsletter.ID }, newsletter);
        }
        public class NewsLetterViewModel
        {
            public string Name { get; set; }
            public IFormFile File { get; set; }
        }
    }
}
