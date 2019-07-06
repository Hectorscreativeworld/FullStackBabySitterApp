using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackTheSafeSitterApp.Models
{
  public class CheckListItem
  {
    public int Id { get; set; }

    [ForeignKey("Child")]
    public int ChildId { get; set; }

    public virtual Child Child { get; set; }
    public string Description { get; set; }
    public int OrderSequence { get; set; }

  }
}