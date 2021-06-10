using Core.Product.ValueObjects;
using Core.Shared.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Product.Entities
{
    public class ProductEntity
    {
        public long Id { get; set; }

        public string Title { get; set; }

        public Image Image { get; set; }

        public IEnumerable<Variant> Variants { get; set; }
    }
}
