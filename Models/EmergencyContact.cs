using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackTheSafeSitterApp.Models
{
  public class EmergencyContact
  {
    public int Id { get; set; }
    [ForeignKey("Child")]
    public int ChildId { get; set; }
    public virtual Child Child { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PhoneNumber { get; set; }
  }
}