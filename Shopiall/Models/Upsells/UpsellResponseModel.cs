using Core.Product.Entities;
using Core.Upsell.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Models.Upsells
{
    public class UpsellResponseModel : UpsellEntity
    {
        public IEnumerable<ProductEntity> Products { get; set; }
    }
}
