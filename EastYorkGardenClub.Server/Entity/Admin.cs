namespace EastYorkGardenClub.Server.Entity
{
    public class Admin
    {
        public required Guid ID { get; set; }
        public required string AdminName { get; set; }
        public required string AdminEmail { get; set; }
        public required string Password { get; set; }
    }
}
