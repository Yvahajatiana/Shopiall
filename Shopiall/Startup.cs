using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Infrastructure.Data;
using AutoMapper;
using Core.Comment.Entities;
using Shopiall.Models;
using Infrastructure.Shopify;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace Shopiall
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var tokenConfig = Configuration.GetSection("TokenConfiguration");
            services.Configure<TokenConfiguration>(tokenConfig);
            var tokenConfiguration = new TokenConfiguration();
            tokenConfig.Bind(tokenConfiguration);

            var shopifyConfig = Configuration.GetSection("ShopifyConfiguration");
            services.Configure<ShopifyConfig>(shopifyConfig);
            var shopifyConfiguration = new ShopifyConfig();
            shopifyConfig.Bind(shopifyConfiguration);

            services.AddInfrastructureData();
            
            services.AddAutoMapper(typeof(Startup));
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddCookie(options =>
            {
                options.LoginPath = "/authentication/token";
                options.LogoutPath = "/authentication/signout";
            })
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = tokenConfiguration.Issuer,
                    ValidAudience = tokenConfiguration.ValideAudience,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenConfiguration.SecretKey))
                };
            })
            .AddShopify(x =>
            {
                x.ClientId = shopifyConfiguration.ClientId;
                x.ClientSecret = shopifyConfiguration.ClientSecret;
                x.SaveTokens = true;
                x.Events.OnCreatingTicket = context =>
                {
                    context.Identity.AddClaim(new Claim("access_token", context.AccessToken));
                    return System.Threading.Tasks.Task.CompletedTask;
                };
            });
            services.AddInfrastructureShopify();
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseCors();
            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });
            
            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";
                /*
                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }*/
            });
        }
    }
}
