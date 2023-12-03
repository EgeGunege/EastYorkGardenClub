using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EastYorkGardenClub.Server.Migrations
{
    /// <inheritdoc />
    public partial class NewsLetters : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ReadMoreLink",
                table: "Meetings",
                newName: "Details");

            migrationBuilder.CreateTable(
                name: "NewsLetters",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FilePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UploadDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsLetters", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NewsLetters");

            migrationBuilder.RenameColumn(
                name: "Details",
                table: "Meetings",
                newName: "ReadMoreLink");
        }
    }
}
