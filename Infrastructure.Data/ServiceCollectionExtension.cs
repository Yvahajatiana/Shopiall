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
        }

        private static void AddDataBase(this IServiceCollection services)
        {
            services.AddSingleton<IMongoClient>(x =>
            {
                return new MongoClient("mongodb+srv://kiassy_321:ldSstCnXKlSOIBa0@cluster0.sirl0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            });

            services.AddScoped(x => x.GetRequiredService<IMongoClient>().StartSession());
        }
    }
}
