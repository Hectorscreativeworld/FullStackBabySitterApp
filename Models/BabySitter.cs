using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackTheSafeSitterApp.Models
{
  public class BabySitter
  {
    public int Id { get; set; }
    [ForeignKey("User")]
    public int UserId { get; set; }

    public virtual User User { get; set; }
    public float? MondayFrom { get; set; }
    public float? MondayTo { get; set; }
    public float? TuesdayFrom { get; set; }
    public float? TuesdayTo { get; set; }
    public float? WednesdayFrom { get; set; }
    public float? WednesdayTo { get; set; }
    public float? ThursdayFrom { get; set; }
    public float? ThursdayTo { get; set; }
    public float? FridayFrom { get; set; }
    public float? FridayTo { get; set; }
    public float? SaturdayFrom { get; set; }
    public float? SaturdayTo { get; set; }
    public float? SundayFrom { get; set; }
    public float? SundayTo { get; set; }
    public string Photo { get; set; }
    public decimal HourlyRate { get; set; }
    public string TheBioInformation { get; set; }
    public string PaymentType { get; set; }





  }
}