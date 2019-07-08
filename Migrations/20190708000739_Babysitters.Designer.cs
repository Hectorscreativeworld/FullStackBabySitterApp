﻿// <auto-generated />
using System;
using FullStackTheSafeSitterApp;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20190708000739_Babysitters")]
    partial class Babysitters
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.BabySitter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<float?>("FridayFrom");

                    b.Property<float?>("FridayTo");

                    b.Property<decimal>("HourlyRate");

                    b.Property<float?>("MondayFrom");

                    b.Property<float?>("MondayTo");

                    b.Property<string>("PaymentType");

                    b.Property<string>("Photo");

                    b.Property<float?>("SaturdayFrom");

                    b.Property<float?>("SaturdayTo");

                    b.Property<float?>("SundayFrom");

                    b.Property<float?>("SundayTo");

                    b.Property<string>("TheBioInformation");

                    b.Property<float?>("ThursdayFrom");

                    b.Property<float?>("ThursdayTo");

                    b.Property<float?>("TuesdayFrom");

                    b.Property<float?>("TuesdayTo");

                    b.Property<int>("UserId");

                    b.Property<float?>("WednesdayFrom");

                    b.Property<float?>("WednesdayTo");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("BabySitters");
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.BabySittingJob", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ChildId");

                    b.Property<DateTime>("From");

                    b.Property<DateTime>("To");

                    b.Property<bool>("WasCompleted");

                    b.HasKey("Id");

                    b.ToTable("BabySittingJobs");
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.CheckListItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ChildId");

                    b.Property<string>("Description");

                    b.Property<int>("OrderSequence");

                    b.HasKey("Id");

                    b.HasIndex("ChildId");

                    b.ToTable("CheckListItems");
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.CheckListLog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("BabySitterId");

                    b.Property<int>("CheckListItemId");

                    b.Property<DateTime>("CompletedDate");

                    b.HasKey("Id");

                    b.ToTable("CheckListLog");
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.Child", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Allergy");

                    b.Property<string>("AllergyInstruction");

                    b.Property<string>("CurrentStatus");

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<int>("EmergencyContactId");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("LastName");

                    b.Property<string>("Notes");

                    b.Property<int>("ParentId");

                    b.Property<string>("Photo");

                    b.HasKey("Id");

                    b.ToTable("Children");
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.EmergencyContact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ChildId");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("PhoneNumber");

                    b.HasKey("Id");

                    b.HasIndex("ChildId")
                        .IsUnique();

                    b.ToTable("EmergencyContacts");
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.Parent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Parents");
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<bool>("IsBabySitter");

                    b.Property<bool>("IsParent");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.BabySitter", b =>
                {
                    b.HasOne("FullStackTheSafeSitterApp.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.CheckListItem", b =>
                {
                    b.HasOne("FullStackTheSafeSitterApp.Models.Child", "Child")
                        .WithMany("CheckList")
                        .HasForeignKey("ChildId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.EmergencyContact", b =>
                {
                    b.HasOne("FullStackTheSafeSitterApp.Models.Child", "Child")
                        .WithOne("EmergencyContact")
                        .HasForeignKey("FullStackTheSafeSitterApp.Models.EmergencyContact", "ChildId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FullStackTheSafeSitterApp.Models.Parent", b =>
                {
                    b.HasOne("FullStackTheSafeSitterApp.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
