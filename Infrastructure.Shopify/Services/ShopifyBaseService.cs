using Infrastructure.Shopify.Exceptions;
using Infrastructure.Shopify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Shopify.Services
{
    public abstract class ShopifyBaseService
    {
        protected const string ADMIN_URI = "/admin/api/2021-04/";

        protected async Task<string> Post<T>(ShopifyRequest<T> request)
        {
            using(var httpClient = new HttpClient())
            {
                AddHttpClientParams(httpClient, request.PermanentToken);
                var response = await httpClient.PostAsync(request.Uri, DataToHttpContent(request.Data));
                CheckResponse(response);

                return await GetResponse(response);
            }
        }

        protected async Task<string> Get(ShopifyRequestNoData request)
        {
            using (var httpClient = new HttpClient())
            {
                AddHttpClientParams(httpClient, request.PermanentToken);
                var response = await httpClient.GetAsync(request.Uri);
                CheckResponse(response);

                return await GetResponse(response);
            }
        }

        private void AddHttpClientParams(HttpClient httpClient, string token)
        {
            AddBaseAddress(httpClient);
            AddAuthHeaderValue(httpClient, token);
        }

        private void AddAuthHeaderValue(HttpClient httpClient, string token)
        {
            httpClient
                .DefaultRequestHeaders
                .Add("X-Shopify-Access-Token", token);
        }

        private void AddBaseAddress(HttpClient httpClient)
        {
            httpClient.BaseAddress = new Uri("https://kiassytest.myshopify.com/");
        }

        private HttpContent DataToHttpContent<T>(T data)
        {
            var json = JsonSerializer.Serialize(data);
            return new StringContent(json, Encoding.UTF8, "application/json");
        }

        private async Task<string> GetResponse(HttpResponseMessage httpResponse)
        {
            httpResponse.EnsureSuccessStatusCode();
            return await httpResponse.Content.ReadAsStringAsync();
        }

        private void CheckResponse(HttpResponseMessage httpResponse)
        {
            if (!httpResponse.IsSuccessStatusCode)
            {
                throw new ShopifyException((int)httpResponse.StatusCode, httpResponse?.ReasonPhrase);
            }
        }

        protected string GetUri(string path)
        {
            return $"{ADMIN_URI}{path}";
        }
    }
}
