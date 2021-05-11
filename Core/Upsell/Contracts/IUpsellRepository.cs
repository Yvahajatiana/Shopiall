using Core.Shared.Contracts;
using Core.Upsell.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Upsell.Contracts
{
    public interface IUpsellRepository : IRepositoryBase<UpsellEntity>
    {
        Task<IEnumerable<UpsellEntity>> GetUpsells();

        Task<UpsellEntity> GetUpsellById(string id);
    }
}
