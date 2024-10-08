﻿using EastYorkGardenClub.Server.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace EastYorkGardenClub.Server.Data
{
    public class EYGCDbContext : DbContext
    {
        public EYGCDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Member> Members { get; set; }
        public DbSet<Meeting> Meetings { get; set; }
        public DbSet<NewsLetter> NewsLetters { get; set; }
        public DbSet<About> Abouts { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Home> Homes { get; set; }
        public DbSet<FlowerShow> Shows { get; set; }
        public DbSet<FSPage> FSPage { get; set; }
    }
}
