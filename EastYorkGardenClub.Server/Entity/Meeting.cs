namespace EastYorkGardenClub.Server.Entity
{
    public class Meeting
    {
        public required Guid ID { get; set; }
        public required string Title { get; set; }
        public required string Speaker { get; set; }
        public required DateTime Date { get; set; }
        public byte[]? ImageData { get; set; }
        public string? ImageContentType { get; set; }
        public required string Details { get; set; }
    }

}
