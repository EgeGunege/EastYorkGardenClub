namespace EastYorkGardenClub.Server.Entity
{
    public class Home
    {
        public Guid ID { get; set; }
        public byte[]? ImageData { get; set; }
        public string? ImageContentType { get; set; }
        public required string HeaderDescription { get; set; }
        public required string ContactUsAddress { get; set; }
        public required string ContactUsEmail { get; set; }
        public required string GoogleMapsUrl { get; set; }
    }
}
