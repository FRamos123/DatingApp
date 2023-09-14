using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace API.DTO
{
    public class LoginDto
    {
   public string Username { get; set; }

   public string Password { get; set; }
    }
}