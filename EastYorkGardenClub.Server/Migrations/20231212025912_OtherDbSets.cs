using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EastYorkGardenClub.Server.Migrations
{
    /// <inheritdoc />
    public partial class OtherDbSets : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Abouts",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AboutText = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageData = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    ImageContentType = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Abouts", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Homes",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ImageData = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    ImageContentType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HeaderDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactUsAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactUsEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GoogleMapsUrl = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Homes", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MessageText = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MessageDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Abouts");

            migrationBuilder.DropTable(
                name: "Homes");

            migrationBuilder.DropTable(
                name: "Messages");
        }
    }
}
