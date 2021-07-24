using AutoMapper;
using Core.Product.Contracts;
using Core.Upsell.Contracts;
using Core.Upsell.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Shopiall.Extensions;
using Shopiall.Models;
using Shopiall.Models.Upsells;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UpsellController : ControllerBase
    {
        private readonly IUpsellRepository upsellRepository;
        private readonly IMapper mapper;
        private readonly IProductService productService;

        public UpsellController(IUpsellRepository upsellRepository, IMapper mapper, IProductService productService)
        {
            this.upsellRepository = upsellRepository;
            this.mapper = mapper;
            this.productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUpsells()
        {
            var upsells = await upsellRepository.GetUpsells();
            var products = await productService.GetProducts(this.GetShopifyAccessToken());
            var upsellsDto = upsells.Select(upsell =>
            {
                var upsellProducts = products.Where(product => upsell.ProductIds.Contains(product.Id));
                var upsellsDto = mapper.Map<UpsellResponseModel>(upsell);
                upsellsDto.Products = upsellProducts;

                return upsellsDto;
            });

            return Ok(upsellsDto);
        }

        [HttpGet("getbyid/{id:length(24)}")]
        public async Task<IActionResult> GetUpsellById(string id)
        {
            var upsell = await upsellRepository.GetUpsellById(id);

            return Ok(upsell);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] UpsellModel upsell)
        {
            var upsellEntity = mapper.Map<UpsellEntity>(upsell);
            await upsellRepository.InsertAsync(upsellEntity);

            return Ok(upsellEntity);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, [FromBody] UpsellModel upsell)
        {
            var upsellEntity = mapper.Map<UpsellEntity>(upsell);
            await upsellRepository.UpdateAsync(id, upsellEntity);

            return Ok();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            await upsellRepository.DeleteAsync(id);

            return Ok();
        }

    }
}
