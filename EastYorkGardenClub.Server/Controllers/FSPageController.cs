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
    public class FSPageController : ControllerBase
    {
        private readonly EYGCDbContext _context;

        public FSPageController(EYGCDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<FSPage>> GetFSPage()
        {
            var page = await _context.FSPage.FirstOrDefaultAsync();

            if (page == null)
            {
                return NotFound();
            }

            return page;
        }

        [HttpPut]
        public async Task<IActionResult> UpdateFSPage(FSPage fsPage)
        {
            if (_context.FSPage.Any())
            {
                var existingPage = await _context.FSPage.FirstOrDefaultAsync();
                existingPage!.PageDescription = fsPage.PageDescription;

                _context.Entry(existingPage).State = EntityState.Modified;
            }
            else
            {
                _context.FSPage.Add(fsPage);
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FSPageExists(fsPage.ID))
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

        private bool FSPageExists(Guid id)
        {
            return _context.FSPage.Any(e => e.ID == id);
        }
    }
}

