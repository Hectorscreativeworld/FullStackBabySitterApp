using FullStackTheSafeSitterApp.Models;
using Microsoft.AspNetCore.Identity;

namespace FullStackTheSafeSitterApp.ClientApp.src.Services
{
  public class UserService
  {
    public string HashPassword(User user, string passwordToHash)
    {
      return new PasswordHasher<User>().HashPassword(user, passwordToHash);
    }
  }
}