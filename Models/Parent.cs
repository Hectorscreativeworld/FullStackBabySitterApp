namespace FullStackTheSafeSitterApp.Models
{
  public class Parent
  {
    public int Id { get; set; }
    public int UserId { get; set; }
    public virtual User User { get; set; }


  }
}