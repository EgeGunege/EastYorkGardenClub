namespace EastYorkGardenClub.Server.Entity
{
    public class About
    {
        public required Guid ID { get; set; }
        public required string AboutText { get; set; }
        public byte[]? ImageData { get; set; }
        public string? ImageContentType { get; set; }
    }
}
