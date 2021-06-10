using Core.Shared.Contracts;
using Core.Shared.Entities;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class BaseRepository<T> : IRepositoryBase<T> where T: BaseEntity
    {
        private const string DATABASE = "ShopiallDb";
        private readonly IMongoClient _mongoClient;
        private readonly IClientSessionHandle _clientSessionHandle;
        private readonly string _collection;
        protected virtual IMongoCollection<T> Collection =>
        _mongoClient.GetDatabase(DATABASE).GetCollection<T>(_collection);

        public BaseRepository(IMongoClient mongoClient, IClientSessionHandle clientSessionHandle, string collection)
        {
            (_mongoClient, _clientSessionHandle, _collection) = (mongoClient, clientSessionHandle, collection);

            if (!_mongoClient.GetDatabase(DATABASE).ListCollectionNames().ToList().Contains(collection))
                _mongoClient.GetDatabase(DATABASE).CreateCollection(collection);
        }

        public async Task InsertAsync(T obj)
        {
            obj.Id = ObjectId.GenerateNewId().ToString();
            await Collection.InsertOneAsync(_clientSessionHandle, obj);
        }
        

        public async Task UpdateAsync(string id, T obj)
        {
            obj.Id = id;
            Expression<Func<T, string>> func = f => f.Id;
            var filter = Builders<T>.Filter.Eq(func, id);

            if (obj != null)
                await Collection.ReplaceOneAsync(_clientSessionHandle, filter, obj);
        }

        public async Task DeleteAsync(string id) =>
            await Collection.DeleteOneAsync(_clientSessionHandle, f => f.Id == id);
    }
}
