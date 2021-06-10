using Core.Upsell.Entities;
using MongoDB.Bson.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Maps
{
    public class UpsellMap
    {
        public UpsellMap()
        {
            BsonClassMap.RegisterClassMap<UpsellEntity>(map =>
            {
                map.AutoMap();
                map.SetIgnoreExtraElements(true);
                map.MapMember(x => x.Title).SetIsRequired(true);
                map.MapMember(x => x.PrimaryText);
                map.MapMember(x => x.OwnerProduct);
                map.MapMember(x => x.SecondaryText);
                map.MapMember(x => x.ProductIds).SetIsRequired(true);
            });
        }
    }
}
