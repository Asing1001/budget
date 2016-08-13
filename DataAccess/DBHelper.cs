using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class DBHelper
    {
        //public static string connectionStr = "Data Source=southasia.database.windows.net;Initial Catalog=budgetDB;User ID=comma;Password=c@mma123";
        //public static string connectionStr = "Data Source=127.0.0.1;Initial Catalog=budget;Integrated Security=True";
        public static string connectionStr = "Server=tcp:southasia.database.windows.net,1433;Initial Catalog=budgetDB;Persist Security Info=False;User ID=comma;Password=C@mma123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
       
        public DBHelper()
        {

        }

        public List<ENGINEER_BUDGET> Get_ENGINEER_BUDGET()
        {
            using(DataClassesDataContext db =new DataClassesDataContext(connectionStr))
            {
                return (from q in db.ENGINEER_BUDGET select q).ToList();
            }
        }
        
        public List<ENGINEER_INFO> Get_ENGINEER_INFO()
        {
            using(DataClassesDataContext db =new DataClassesDataContext(connectionStr))
            {
               return (from q in db.ENGINEER_INFO select q).ToList();
            }
        }

        public List<NOT_CLOSE> Get_NOT_CLOSE()
        {
            using(DataClassesDataContext db =new DataClassesDataContext(connectionStr))
            {
                return (from q in db.NOT_CLOSE select q).ToList(); 
            }
        }

        public List<SUMMARY_TYPE> Get_SUMMARY_TYPE()
        {
            using (DataClassesDataContext db = new DataClassesDataContext(connectionStr))
            {
                return (from q in db.SUMMARY_TYPE select q).ToList();
            }
        }

        public List<SUMMARY_COMPARE> Get_SUMMARY_COMPARE()
        {
            using (DataClassesDataContext db = new DataClassesDataContext(connectionStr))
            {
                return (from q in db.SUMMARY_COMPARE select q).ToList();
            }
        }

        //public List<NOT_CLOSE> Get_TOP5AGREE()
        //{
        //    using (DataClassesDataContext db = new DataClassesDataContext(connectionStr))
        //    {
        //        return (from q in db.ENGINEER_BUDGET select q).OrderBy(o => o.AGREE desc).ToList();
        //    }
        //}
    }
}
