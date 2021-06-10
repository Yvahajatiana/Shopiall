using Core.Comment.Contracts;
using Core.Comment.Entities;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class CommentRepository : BaseRepository<CommentEntity>, ICommentRepository
    {
        public CommentRepository(IMongoClient mongoClient, IClientSessionHandle clientSessionHandle) 
            : base(mongoClient, clientSessionHandle, "Comments")
        {
        }

        public async Task<CommentEntity> GetCommentById(string commentId)
        {
            var filter = Builders<CommentEntity>.Filter.Eq(x => x.Id, commentId);

            return await Collection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task<List<CommentEntity>> GetComments()
        {
            return await Collection.AsQueryable().ToListAsync();
        }

        public async Task<List<CommentEntity>> GetCommentsByProductId(int productId)
        {
            var filter = Builders<CommentEntity>.Filter.Eq(x => x.ProductId, productId);

            return await Collection.Find(filter).ToListAsync();
        }
    }
}
