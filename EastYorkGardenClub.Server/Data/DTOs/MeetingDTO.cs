namespace EastYorkGardenClub.Server.Data.DTOs
{
    public class MeetingDTO
    {
        public required Guid ID { get; set; }
        public required string Title { get; set; }
        public required string Speaker { get; set; }
        public required DateTime Date { get; set; }
        public required string ImageData { get; set; }
        public required string ImageContentType { get; set; }
        public required string Details { get; set; }
    }
}
