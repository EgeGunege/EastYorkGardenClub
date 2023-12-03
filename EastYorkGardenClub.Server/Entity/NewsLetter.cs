namespace EastYorkGardenClub.Server.Entity
{
    public class NewsLetter
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string FilePath { get; set; }
        public DateTime UploadDate { get; set; }
    }
}
