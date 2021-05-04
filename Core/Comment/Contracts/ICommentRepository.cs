using Core.Comment.Entities;
using Core.Shared.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Comment.Contracts
{
    public interface ICommentRepository : IRepositoryBase<CommentEntity>
    {
        Task<List<CommentEntity>> GetComments();

        Task<List<CommentEntity>> GetCommentsByProductId(int productId);

        Task<CommentEntity> GetCommentById(string commentId);
    }
}
