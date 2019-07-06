using System;

namespace FullStackTheSafeSitterApp.Models
{
  public class CheckListLog
  {
    public int Id { get; set; }
    public int CheckListItemId { get; set; }
    public DateTime CompletedDate { get; set; }

    public int BabySitterId { get; set; }

  }
}