using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace budget.Controllers.API
{
    public class DataBaseController : ApiController
    {
        public DBHelper _dbhelper = new DBHelper();

        [HttpPost]
        public List<ENGINEER_BUDGET> GetData()
        {
           return  _dbhelper.Get_ENGINEER_BUDGET();
        }

    }
}
