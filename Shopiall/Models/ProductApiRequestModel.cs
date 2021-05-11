using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Models
{
    public class ProductApiRequestModel
    {
        [Required]
        public long[] ProductIds { get; set; }
    }
}
