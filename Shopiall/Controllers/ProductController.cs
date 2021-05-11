using Core.Product.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shopiall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService productService;

        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await productService.GetProducts();

            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> GetProductsByIds(ProductApiRequestModel requestModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var products = await productService.GetProductsByIds(requestModel.ProductIds);

            return Ok(products);
        }
    }
}
