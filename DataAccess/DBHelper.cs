using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class DBHelper
    {        
        //public static string connectionStr = "Data Source=southasia.database.windows.net;Initial Catalog=budgetDB;User ID=testuser;Password=MYPASSWORDHERE";
        //public static string connectionStr = "Data Source=127.0.0.1;Initial Catalog=budget;Integrated Security=True";
        public static string connectionStr = "Server=tcp:southasia.database.windows.net,1433;Initial Catalog=budgetDB;Persist Security Info=False;User ID=comma;Password=C@mma123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
       
        public DBHelper()
        {

        }

        public List<ENGINEER_BUDGET> Get_ENGINEER_BUDGET()
        {
            using(DataClassesDataContext db =new DataClassesDataContext(connectionStr))
            {
                return from q in db.ENGINEER_BUDGET select q;
            }
        }
        
        public List<ENGINEER_INFO> Get_ENGINEER_INFO()
        {
            using(DataClassesDataContext db =new DataClassesDataContext(connectionStr))
            {
                var query=from q in db.ENGINEER_INFO select q;
            }
        }

        public List<ENGINEER_INFO> Get_NOT_CLOSE()
        {
            using(DataClassesDataContext db =new DataClassesDataContext(connectionStr))
            {
                var query=from q in db.NOT_CLOSE select q;
            }
        } 
    }
}
