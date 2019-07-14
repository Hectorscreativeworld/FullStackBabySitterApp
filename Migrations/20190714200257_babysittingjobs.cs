using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class babysittingjobs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BabysitterID",
                table: "BabySittingJobs",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_BabySittingJobs_BabysitterID",
                table: "BabySittingJobs",
                column: "BabysitterID");

            migrationBuilder.CreateIndex(
                name: "IX_BabySittingJobs_ChildId",
                table: "BabySittingJobs",
                column: "ChildId");

            migrationBuilder.AddForeignKey(
                name: "FK_BabySittingJobs_BabySitters_BabysitterID",
                table: "BabySittingJobs",
                column: "BabysitterID",
                principalTable: "BabySitters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BabySittingJobs_Children_ChildId",
                table: "BabySittingJobs",
                column: "ChildId",
                principalTable: "Children",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BabySittingJobs_BabySitters_BabysitterID",
                table: "BabySittingJobs");

            migrationBuilder.DropForeignKey(
                name: "FK_BabySittingJobs_Children_ChildId",
                table: "BabySittingJobs");

            migrationBuilder.DropIndex(
                name: "IX_BabySittingJobs_BabysitterID",
                table: "BabySittingJobs");

            migrationBuilder.DropIndex(
                name: "IX_BabySittingJobs_ChildId",
                table: "BabySittingJobs");

            migrationBuilder.DropColumn(
                name: "BabysitterID",
                table: "BabySittingJobs");
        }
    }
}
