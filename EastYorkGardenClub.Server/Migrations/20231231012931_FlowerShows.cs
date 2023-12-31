using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EastYorkGardenClub.Server.Migrations
{
    /// <inheritdoc />
    public partial class FlowerShows : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FSPage",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PageDescription = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FSPage", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Shows",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ShowDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ShowFileData = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    ShowFileContentType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shows", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FSPage");

            migrationBuilder.DropTable(
                name: "Shows");
        }
    }
}
