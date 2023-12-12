namespace EastYorkGardenClub.Server.Entity
{
    public class Message
    {
        public required Guid ID { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string MessageText { get; set; }
        public required DateTime MessageDate { get; set; }
    }
}
