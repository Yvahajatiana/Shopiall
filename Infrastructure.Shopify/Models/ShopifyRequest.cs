namespace Infrastructure.Shopify.Models
{
    public class ShopifyRequest<T> : ShopifyRequestNoData
    {
        public T Data { get; set; }
    }

    public class ShopifyRequestNoData
    {
        public string Uri { get; set; }

        public string PermanentToken { get; set; }
    }
}
