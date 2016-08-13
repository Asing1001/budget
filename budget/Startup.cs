using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(budget.Startup))]
namespace budget
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
