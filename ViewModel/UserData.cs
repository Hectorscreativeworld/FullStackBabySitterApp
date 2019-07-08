using FullStackTheSafeSitterApp.Models;

namespace FullStackTheSafeSitterApp.ViewModel

{
  public class UserData
  {
    public string Token { get; set; }
    public long TokenExpirationTime { get; set; }
    public int Id { get; set; }
    public User User { get; set; }
  }
}