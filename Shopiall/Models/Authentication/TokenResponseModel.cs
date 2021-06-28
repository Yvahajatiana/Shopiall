using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Models.Authentication
{
    public class TokenResponseModel
    {
        public string Token { get; set; }

        public string RefreshToken { get; set; }
    }
}
