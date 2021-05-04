using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Models
{
    public class CommentModel
    {
        public string UserName { get; set; }

        public int ProductId { get; set; }

        public int Rating { get; set; }

        public string Content { get; set; }
    }
}
