using Core.Product.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Product.Contracts
{
    public interface IProductService
    {
        Task<IEnumerable<ProductEntity>> GetProducts(string token);

        Task<IEnumerable<ProductEntity>> GetProductsByIds(long[] ids, string token);
    }
}
