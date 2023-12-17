namespace EastYorkGardenClub.Server.Data.DTOs
{
    public class MessageDTO
    {
        public required Guid ID { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string MessageText { get; set; }
        public required DateTime MessageDate { get; set; }
    }
}
