using Core.Product.Contracts;
using Core.Product.Entities;
using Infrastructure.Shopify.Contracts;
using Infrastructure.Shopify.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Shopify.Services
{
    public class ProductService : ShopifyBaseService, IProductService
    {
        private const string PRODUCT_URI = "products.json";
        private readonly IShopifyCredential shopifyCredential;

        public ProductService(IShopifyCredential shopifyCredential)
        {
            this.shopifyCredential = shopifyCredential;
        }

        public async Task<IEnumerable<ProductEntity>> GetProducts()
        {
            var request = CreateNoDataRequest(GetUri(PRODUCT_URI));

            var result = await Get(request);
            var parsedResult = JsonConvert.DeserializeObject<ProductShopifyResponse>(result);

            return parsedResult.Products;
        }

        public async Task<IEnumerable<ProductEntity>> GetProductsByIds(long[] ids)
        {
            var uri = AddIdsParameter(GetUri(PRODUCT_URI), ids);
            var request = CreateNoDataRequest(uri);

            var result = await Get(request);
            var parsedResult = JsonConvert.DeserializeObject<ProductShopifyResponse>(result);

            return parsedResult.Products;
        }

        private ShopifyRequestNoData CreateNoDataRequest(string uri)
        {
            return new ShopifyRequestNoData
            {
                Uri = uri,
                PermanentToken = shopifyCredential.PermanentToken
            };
        }

        private string AddIdsParameter(string uri, long[] ids)
        {
            return AddParameter(uri, "ids", string.Join(",", ids));
        }

        private string AddParameter(string uri, string parameterKey, string parameterValue)
        {
            if (IsFirstParameter(uri))
            {
                return $"{uri}?{parameterKey}={parameterValue}";
            }

            return $"{uri}&{parameterKey}={parameterValue}";
        }

        private bool IsFirstParameter(string uri)
        {
            return !uri.Contains("?");
        }
    }
}
