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

        [HttpGet]
        public List<ENGINEER_BUDGET> GetENGINEERBUDGET()
        {
            try
            {
                return _dbhelper.Get_ENGINEER_BUDGET();
            }
            catch(Exception ex)
            {
                return null;
            }
        }

        [HttpGet]
        public List<ENGINEER_INFO> GetENGINEERINFO()
        {
            try
            {
                return _dbhelper.Get_ENGINEER_INFO();
            }
            catch(Exception ex)
            {
                return null;
            }
        }

        [HttpGet]
        public List<NOT_CLOSE> GetNOTCLOSE()
        {
            try
            {
                return _dbhelper.Get_NOT_CLOSE();
            }
            catch(Exception ex)
            {
                return null;
            }
        }
    }
}
