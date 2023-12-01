namespace EastYorkGardenClub.Server.Data.DTOs
{
    public class MeetingDTO
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Speaker { get; set; }
        public DateTime Date { get; set; }
        public string ImageData { get; set; }
        public string ImageContentType { get; set; }
        public string ReadMoreLink { get; set; }
    }
}
