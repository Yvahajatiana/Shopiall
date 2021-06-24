using AutoMapper;
using Core.Upsell.Contracts;
using Core.Upsell.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Shopiall.Models;
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

        public UpsellController(IUpsellRepository upsellRepository, IMapper mapper)
        {
            this.upsellRepository = upsellRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUpsells()
        {
            var upsells = await upsellRepository.GetUpsells();

            return Ok(upsells);
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

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            await upsellRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}
