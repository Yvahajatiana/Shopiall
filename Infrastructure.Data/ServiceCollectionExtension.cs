using Core.Comment.Contracts;
using Infrastructure.Data.Maps;
using Infrastructure.Data.Repositories;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using System;

namespace Infrastructure.Data
{
    public static class ServiceCollectionExtension
    {
        public static void AddInfrastructureData(this IServiceCollection services)
        {
            services.AddDataBase();
            services.AddDependencies();

            _ = new MainMaps();
        }

        private static void AddDataBase(this IServiceCollection services)
        {
            services.AddSingleton<IMongoClient>(x =>
            {
                return new MongoClient("mongodb+srv://kiassy_321:ldSstCnXKlSOIBa0@cluster0.sirl0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            });

            services.AddScoped(x => x.GetRequiredService<IMongoClient>().StartSession());
        }

        private static void AddDependencies(this IServiceCollection services)
        {
            services.AddTransient<ICommentRepository, CommentRepository>();
        }
    }
}
