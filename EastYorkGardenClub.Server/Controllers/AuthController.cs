using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EastYorkGardenClub.Server.Data.DTOs;
using EastYorkGardenClub.Server.Data;
using Microsoft.AspNetCore.Cors;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

namespace EastYorkGardenClub.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowWebApp")]
    public class AuthController : ControllerBase
    {
        private readonly EYGCDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(EYGCDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] LoginDto loginDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var admin = await _context.Admins
                .SingleOrDefaultAsync(a => a.AdminEmail == loginDto.Email && a.Password == loginDto.Password);

            if (admin != null)
            {
                // Authentication successful
                var token = GenerateJwtToken(admin.AdminName);
                return Ok(new { Message = "Login successful!", Token = token });
            }

            return Unauthorized(new { Message = "Invalid credentials." });
        }

        private string GenerateJwtToken(string username)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("name", username)
                }),
                Expires = DateTime.UtcNow.AddMinutes(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
