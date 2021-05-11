using Core.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Upsell.Entities
{
    public class UpsellEntity : BaseEntity
    {
        public string Title { get; set; }

        public string PrimaryText { get; set; }

        public string SecondaryText { get; set; }

        public long[] ProductIds { get; set; }
    }
}
