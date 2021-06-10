using Core.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Comment.Entities
{
    public class CommentEntity : BaseEntity
    {
        public string UserName { get; set; }

        public int ProductId { get; set; }

        public int Rating { get; set; }

        public string Content { get; set; }
    }
}
