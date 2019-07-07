using System;
using System.Collections.Generic;

namespace FullStackTheSafeSitterApp.Models
{
  public class Child
  {
    public int Id { get; set; }
    public int ParentId { get; set; }
    public DateTime DateOfBirth { get; set; } = DateTime.Now;

    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Gender { get; set; }

    public string Notes { get; set; }
    public string Allergy { get; set; }
    public string AllergyInstruction { get; set; }
    public int EmergencyContactId { get; set; }
    public EmergencyContact EmergencyContact { get; set; }
    public string Photo { get; set; }
    public string CurrentStatus { get; set; }
    public virtual List<CheckListItem> CheckList { get; set; }
  }
}