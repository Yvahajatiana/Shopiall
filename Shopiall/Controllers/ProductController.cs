using Core.Product.Contracts;
using Infrastructure.Shopify.Contracts;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shopiall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Shopiall.Extensions;
using Microsoft.AspNetCore.Authentication;

namespace Shopiall.Controllers
{
    [Authorize]
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
            var token = this.GetShopifyAccessToken();
            var products = await productService.GetProducts(token);

            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> GetProductsByIds(ProductApiRequestModel requestModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var token = this.GetShopifyAccessToken();
            var products = await productService.GetProductsByIds(requestModel.ProductIds, token);

            return Ok(products);
        }
    }
}
