

using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackTheSafeSitterApp.Models
{
  public class Parent
  {

    public int Id { get; set; }

    [ForeignKey("User")]
    public int UserId { get; set; }
    public virtual User User { get; set; }


  }
}