using AutoMapper;
using Core.Upsell.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Models.Profiles
{
    public class UpsellProfile : Profile
    {
        public UpsellProfile()
        {
            CreateMap<UpsellModel, UpsellEntity>();
        }
    }
}
