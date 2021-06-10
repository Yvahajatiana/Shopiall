using AutoMapper;
using Core.Comment.Contracts;
using Core.Comment.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using Shopiall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository commentRepository;
        private readonly IClientSessionHandle clientSession;
        private readonly IMapper mapper;

        public CommentController(
            ICommentRepository commentRepository, 
            IClientSessionHandle clientSession,
            IMapper mapper
            )
        {
            this.commentRepository = commentRepository;
            this.clientSession = clientSession;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetComments()
        {
            var comments = await commentRepository.GetComments();

            return Ok(comments);
        }

        [HttpGet("getbyproductid/{id}")]
        public async Task<IActionResult> GetCommentsByProductId(int id)
        {
            var comments = await commentRepository.GetCommentsByProductId(id);

            return Ok(comments);
        }

        [HttpGet("getbyid/{id:length(24)}")]
        public async Task<IActionResult> GetCommentById(string id)
        {
            var comment = await commentRepository.GetCommentById(id);

            return Ok(comment);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CommentModel comment)
        {
            var commentEntity = mapper.Map<CommentEntity>(comment);
            await commentRepository.InsertAsync(commentEntity);

            return Created("getbyid/", commentEntity);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, CommentModel comment)
        {
            var commentEntity = mapper.Map<CommentEntity>(comment);
            await commentRepository.UpdateAsync(id, commentEntity);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            await commentRepository.DeleteAsync(id);

            return NoContent();
        }
    }
}
