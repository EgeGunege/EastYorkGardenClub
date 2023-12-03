using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EastYorkGardenClub.Server.Migrations
{
    /// <inheritdoc />
    public partial class NewsLettersUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FilePath",
                table: "NewsLetters",
                newName: "FileContentType");

            migrationBuilder.AddColumn<byte[]>(
                name: "FileData",
                table: "NewsLetters",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FileData",
                table: "NewsLetters");

            migrationBuilder.RenameColumn(
                name: "FileContentType",
                table: "NewsLetters",
                newName: "FilePath");
        }
    }
}
