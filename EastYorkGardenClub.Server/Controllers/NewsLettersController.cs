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
        public async Task<ActionResult<IEnumerable<NewsLetter>>> GetNewsletter()
        {
            var news = await _context.NewsLetters
                                .OrderByDescending(n => n.UploadDate)
                                .Select(n => new NewsLettersDTO
                                {
                                    ID = n.ID,
                                    Name = n.Name,
                                    FilePath = n.FilePath,
                                })
                                .ToListAsync();

            return Ok(news);

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
                FilePath = string.Empty,
                UploadDate = DateTime.UtcNow
            };

            if (model.File != null)
            {
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), "pdf");

                if (!Directory.Exists(pathToSave))
                {
                    Directory.CreateDirectory(pathToSave);
                }

                var fileName = model.File.FileName;
                var fullPath = Path.Combine(pathToSave, fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    await model.File.CopyToAsync(stream);
                }

                newsletter.FilePath = Path.Combine("pdf", fileName);
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
