using AutoMapper;
using Core.Comment.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Models.Profiles
{
    public class CommentProfile: Profile
    {
        public CommentProfile()
        {
            CreateMap<CommentModel, CommentEntity>();
        }
    }
}
