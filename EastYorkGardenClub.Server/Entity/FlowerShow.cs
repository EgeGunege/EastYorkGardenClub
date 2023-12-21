namespace EastYorkGardenClub.Server.Entity
{
    public class FlowerShow
    {
        public required Guid ID { get; set; }
        public required string Name { get; set; }
        public required string ShowDescription { get; set; }
        public byte[]? ShowFileData { get; set; }
        public string? ShowFileContentType { get; set; }
        public required DateTime Date { get; set; }
    }
}
