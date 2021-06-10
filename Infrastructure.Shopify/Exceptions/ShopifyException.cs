using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Shopify.Exceptions
{
    [Serializable]
    public class ShopifyException : Exception
    {
        public ShopifyException(int httpStatusCode, string message):
            base($"Shopify error: {httpStatusCode} - {message}")
        {

        }
    }
}
