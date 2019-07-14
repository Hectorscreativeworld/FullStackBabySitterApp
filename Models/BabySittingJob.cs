using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackTheSafeSitterApp.Models
{
  public class BabySittingJob
  {
    public int Id { get; set; }
    [ForeignKey("Child")]
    public int ChildId { get; set; }
    [ForeignKey("BabySitter")]
    public int BabysitterID { get; set; }
    public Child Child { get; set; }
    public BabySitter BabySitter { get; set; }
    public DateTime From { get; set; } = DateTime.Now;
    public DateTime To { get; set; } = DateTime.Now;
    public bool WasCompleted { get; set; }

  }
}