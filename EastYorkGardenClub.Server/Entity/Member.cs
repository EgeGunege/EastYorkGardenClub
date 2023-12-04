namespace EastYorkGardenClub.Server.Entity
{
    public class Member
    {
        public required Guid ID { get; set; }
        public required string MemberName { get; set; }
        public required string MemberEmail { get; set; }
    }
}
