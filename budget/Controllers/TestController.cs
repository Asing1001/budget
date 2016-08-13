using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace budget.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        public ActionResult Index()
        {
            return View();

        }


        public ActionResult Commont()
        {
            return this.View();
        }

        public ActionResult Share()
        {
            return this.View();
        }



    }
}