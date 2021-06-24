using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace Shopiall.Extensions
{
    public static class ControllerExtension
    {
        public static string GetShopifyAccessToken([NotNull] this ControllerBase controller)
        {
            if (controller.User.Identity.IsAuthenticated)
            {
                return controller
                    .User
                    .Claims
                    .FirstOrDefault(x => x.Type.Equals("access_token"))
                    ?.Value;
            }

            return string.Empty;
        }
    }
}
