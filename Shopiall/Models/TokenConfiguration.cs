using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Models
{
    public class TokenConfiguration
    {
        public string ValideAudience { get; set; }

        public string Issuer { get; set; }

        public string SecretKey { get; set; }

        public double Expiration { get; set; }
    }

    public class ShopifyConfig
    {
        public string ClientId { get; set; }

        public string ClientSecret { get; set; }
    }
}
