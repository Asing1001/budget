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

        [Route("~/api/database/GetENGINEERBUDGET")]
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

        [Route("~/api/database/GetENGINEERINFO")]
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

        [Route("~/api/database/GetNOTCLOSE")]
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

        [Route("~/api/database/GetSUMMARYCOMPARE")]
        [HttpGet]
        public List<SUMMARY_COMPARE> Get_SUMMARY_COMPARE()
        {
            try
            {
                return _dbhelper.Get_SUMMARY_COMPARE();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [Route("~/api/database/GetSUMMARYTYPE")]
        [HttpGet]
        public List<SUMMARY_TYPE> Get_SUMMARY_TYPE()
        {
            try
            {
                return _dbhelper.Get_SUMMARY_TYPE();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [Route("~/api/database/GetTOP5AGREE")]
        [HttpGet]
        public List<ENGINEER_BUDGET> Get_TOP5AGREE()
        {
            try
            {
                return _dbhelper.Get_TOP5AGREE();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [Route("~/api/database/GetTOP5DISAGREE")]
        [HttpGet]
        public List<ENGINEER_BUDGET> Get_TOP5DISAGREE()
        {
            try
            {
                return _dbhelper.Get_TOP5DISAGREE();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
