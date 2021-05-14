using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Models
{
    public class UpsellModel
    {
        public string Title { get; set; }

        public string PrimaryText { get; set; }

        public string SecondaryText { get; set; }

        public long[] ProductIds { get; set; }
    }
}
