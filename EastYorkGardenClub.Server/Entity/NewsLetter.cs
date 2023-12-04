namespace EastYorkGardenClub.Server.Entity
{
    public class NewsLetter
    {
        public required Guid ID { get; set; }
        public required string Name { get; set; }
        public byte[]? NewsFileData { get; set; }
        public string? NewsFileContentType { get; set; }
        public required DateTime UploadDate { get; set; }
    }
}
