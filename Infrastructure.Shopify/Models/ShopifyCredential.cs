using Infrastructure.Shopify.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Shopify.Models
{
    public class ShopifyCredential : IShopifyCredential
    {
        public string PermanentToken { get; set; }
    }
}
