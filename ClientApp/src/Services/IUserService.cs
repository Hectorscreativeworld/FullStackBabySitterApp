using FullStackTheSafeSitterApp.Models;
using FullStackTheSafeSitterApp.ViewModel;

namespace FullStackTheSafeSitterApp.ClientApp.src.Services
{
  public class IUserService
  {

  }
}


namespace FullStackTheSafeSitterApp.ClientApp.src.Services
{
  public interface IAuthService
  {
    UserData CreateAuthData(User user);
    string HashPassword(User elephant, string passwordToHash);
    bool VerifyPassword(User user, string providedPassword);

  }
}