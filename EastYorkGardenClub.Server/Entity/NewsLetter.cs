namespace EastYorkGardenClub.Server.Entity
{
    public class NewsLetter
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public byte[] FileData { get; set; }
        public string FileContentType { get; set; }
        public DateTime UploadDate { get; set; }
    }
}
