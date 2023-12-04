namespace EastYorkGardenClub.Server.Data.DTOs
{
    public class NewsLettersDTO
    {
        public required Guid ID { get; set; }
        public required string Name { get; set; }
        public byte[]? NewsFileData { get; set; }
        public string? NewsFileContentType { get; set; }
        public required DateTime UploadDate { get; set; }
    }
}
