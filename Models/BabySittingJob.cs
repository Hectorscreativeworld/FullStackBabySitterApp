using System;

namespace FullStackTheSafeSitterApp.Models
{
  public class BabySittingJob
  {
    public int Id { get; set; }
    public int ChildId { get; set; }
    public DateTime From { get; set; }
    public DateTime To { get; set; }
    public bool WasCompleted { get; set; }

  }
}