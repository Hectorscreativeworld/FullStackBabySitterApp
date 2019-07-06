using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class CheckListItems : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CheckListItem_Children_ChildId",
                table: "CheckListItem");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CheckListItem",
                table: "CheckListItem");

            migrationBuilder.RenameTable(
                name: "CheckListItem",
                newName: "CheckListItems");

            migrationBuilder.RenameIndex(
                name: "IX_CheckListItem_ChildId",
                table: "CheckListItems",
                newName: "IX_CheckListItems_ChildId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CheckListItems",
                table: "CheckListItems",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CheckListItems_Children_ChildId",
                table: "CheckListItems",
                column: "ChildId",
                principalTable: "Children",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CheckListItems_Children_ChildId",
                table: "CheckListItems");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CheckListItems",
                table: "CheckListItems");

            migrationBuilder.RenameTable(
                name: "CheckListItems",
                newName: "CheckListItem");

            migrationBuilder.RenameIndex(
                name: "IX_CheckListItems_ChildId",
                table: "CheckListItem",
                newName: "IX_CheckListItem_ChildId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CheckListItem",
                table: "CheckListItem",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CheckListItem_Children_ChildId",
                table: "CheckListItem",
                column: "ChildId",
                principalTable: "Children",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
