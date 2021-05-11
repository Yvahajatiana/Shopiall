using Core.Product.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Infrastructure.Shopify.Models
{
    public class ProductShopifyResponse
    {
        [JsonInclude]
        public IList<ProductEntity> Products { get; set; }
    }
}
