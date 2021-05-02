using Core.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Shared.Contracts
{
    public interface IRepositoryBase<T> where T: BaseEntity
    {
        Task InsertAsync(T obj);

        Task UpdateAsync(T obj);

        Task DeleteAsync(string id);
    }
}
