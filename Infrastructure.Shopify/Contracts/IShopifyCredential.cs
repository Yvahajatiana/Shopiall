using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Shopify.Contracts
{
    public interface IShopifyCredential
    {
        string PermanentToken { get; set; }
    }
}
