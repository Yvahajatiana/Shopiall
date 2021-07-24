using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Models
{
    public class UpsellModel
    {
        [Required]
        [StringLength(50, MinimumLength = 3)]
        public string Title { get; set; }

        [Required]
        public long OwnerProduct { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3)]
        public string PrimaryText { get; set; }

        public string SecondaryText { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(3)]
        public long[] ProductIds { get; set; }
    }
}
