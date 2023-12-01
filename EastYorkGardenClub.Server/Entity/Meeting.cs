namespace EastYorkGardenClub.Server.Entity
{
    public class Meeting
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Speaker { get; set; }
        public DateTime Date { get; set; }
        public byte[] ImageData { get; set; }
        public string ImageContentType { get; set; }
        public string ReadMoreLink { get; set; }
    }

}
