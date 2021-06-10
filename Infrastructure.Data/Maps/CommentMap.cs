using Core.Comment.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Maps
{
    public class CommentMap
    {
        public CommentMap()
        {
            BsonClassMap.RegisterClassMap<CommentEntity>(map =>
            {
                map.AutoMap();
                map.SetIgnoreExtraElements(true);
                map.MapMember(x => x.ProductId);
                map.MapMember(x => x.Rating).SetIsRequired(true);
                map.MapMember(x => x.UserName).SetIsRequired(true);
                map.MapMember(x => x.Content).SetIsRequired(true);
            });
        }
    }
}
