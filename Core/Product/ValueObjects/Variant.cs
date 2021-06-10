using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Product.ValueObjects
{
    public class Variant
    {
        public int Position { get; set; }

        public string Title { get; set; }

        public double Price { get; set; }
    }
}
