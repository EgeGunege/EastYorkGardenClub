namespace EastYorkGardenClub.Server.Entity
{
    public class Member
    {
        public required Guid ID { get; set; }
        public required string MemberName { get; set; }
        public required string MemberEmail { get; set; }
        public required string Address { get; set; }
        public required string City { get; set; }
        public required string PostalCode{ get; set; }
        public required string Phone { get; set; }
        public required bool NewsSub { get; set; }
        public required int PaymentType { get; set; }
        public required int MembershipType { get; set; }
        public string? HearAboutUs { get; set;}
        public string? AgeGroup { get; set; }
        public bool? Volunteer { get; set; }
        public bool YearBookSub { get; set; }
        public required DateTime MembershipDate { get; set; } 
    }
}
