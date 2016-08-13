using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using DataAccess;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            DBHelper db = new DBHelper();
            var getlist = db.Get_ENGINEER_BUDGET();


        }
    }
}
