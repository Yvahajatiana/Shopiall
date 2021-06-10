using Core.Shared.Entities;
using Microsoft.Extensions.DependencyInjection;
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
    public class MainMaps
    {
        public MainMaps()
        {
            BsonClassMap.RegisterClassMap<BaseEntity>(map =>
            {
                map.SetIsRootClass(true);
                map.MapIdMember(x => x.Id).SetIsRequired(true);
                map.IdMemberMap.SetSerializer(new StringSerializer(BsonType.ObjectId));
            });
            _ = new CommentMap();
        }
    }
}
