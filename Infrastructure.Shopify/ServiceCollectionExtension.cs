using Core.Product.Contracts;
using Infrastructure.Shopify.Contracts;
using Infrastructure.Shopify.Models;
using Infrastructure.Shopify.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Shopify
{
    public static class ServiceCollectionExtension
    {
        public static void AddInfrastructureShopify(this IServiceCollection services)
        {
            services.AddCredentials();
            services.AddDependencies();
        }

        private static void AddCredentials(this IServiceCollection services)
        {
            services.AddSingleton<IShopifyCredential>(x =>
            {
                return new ShopifyCredential();
            });
        }

        private static void AddDependencies(this IServiceCollection services)
        {
            services.AddTransient<IProductService, ProductService>();
        }
    }
}
