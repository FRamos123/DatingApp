

using System.Security.Claims;

namespace API.Extensions
{
    public static  class ClaimsPrincipalExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
            // FindFirst(ClaimTypes.NameIdentifier) returns the user's username
            return user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
    }
}