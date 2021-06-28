using AspNet.Security.OAuth.Shopify;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Shopiall.Models;
using Shopiall.Models.Authentication;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Shopiall.Controllers
{
    public class AuthenticationController : Controller
    {
        private readonly TokenConfiguration tokenConfiguration;

        public AuthenticationController(IOptions<TokenConfiguration> tokenConfiguration)
        {
            this.tokenConfiguration = tokenConfiguration.Value;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("loginbackend")]
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Token([FromQuery] string shop)
        {
            if (string.IsNullOrEmpty(shop))
            {
                return RedirectToAction("/");
            }

            var properties = GenerateShopifyAuthProperties(shop);

            return Challenge(properties, "Shopify");
        }

        [Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
        public IActionResult JwtToken()
        {
            if (!User.Identity.IsAuthenticated)
            {
                return Redirect("/authentication/login");
            }

            var token = GenerateToken(User.Claims);

            return Redirect($"/dashboard?token={token}");
        }

        [HttpGet("signin-shopify")]
        public IActionResult Back([FromQuery] string code, [FromQuery] string hmac)
        {
            return NoContent();
        }

        private ShopifyAuthenticationProperties GenerateShopifyAuthProperties(string shop)
        {

            var shopName = shop.Split(".")[0];
            var properties = new ShopifyAuthenticationProperties(shopName);
            properties.Scope = "write_orders,read_customers,read_products,read_product_listings";
            properties.RedirectUri = "/authentication/jwttoken";                                                

            return properties;
        }

        private string GenerateToken(IEnumerable<Claim> claims)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenConfiguration.SecretKey));
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(tokenConfiguration.Expiration),
                Issuer = tokenConfiguration.Issuer,
                Audience = tokenConfiguration.ValideAudience,
                SigningCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var accessToken = tokenHandler.WriteToken(token);

            return accessToken;
        }
    }
}
