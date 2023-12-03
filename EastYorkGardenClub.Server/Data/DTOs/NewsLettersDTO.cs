namespace EastYorkGardenClub.Server.Data.DTOs
{
    public class NewsLettersDTO
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public byte[] FileData { get; set; }
        public string FileContentType { get; set; }
        public string UploadDate { get; set; }
    }
}
