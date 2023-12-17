namespace EastYorkGardenClub.Server.Data.DTOs
{
    public class MessageListDTO
    {
        public Guid ID { get; set; }
        public string Name { get; set; }

        public required DateTime Date { get; set; }
    }
}
