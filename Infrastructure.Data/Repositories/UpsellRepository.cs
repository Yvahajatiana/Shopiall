using Core.Comment.Contracts;
using Core.Upsell.Contracts;
using Core.Upsell.Entities;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class UpsellRepository : BaseRepository<UpsellEntity>, IUpsellRepository
    {
        public UpsellRepository(IMongoClient mongoClient, IClientSessionHandle clientSessionHandle)
            : base(mongoClient, clientSessionHandle, "Upsells")
        {
        }

        public async Task<UpsellEntity> GetUpsellById(string id)
        {
            var filter = Builders<UpsellEntity>.Filter.Eq(x => x.Id, id);

            return await Collection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<UpsellEntity>> GetUpsells()
        {
            return await Collection.AsQueryable().ToListAsync();
        }
    }
}
