using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace Mock
{
    [ServiceContract]
    public interface ICaloriesCalculator
    {
        [OperationContract]
        [WebGet]
        ActivityDetailes[] GetAllActivities();

        [OperationContract]
        [WebGet]
        int GetBurnedCalories(string id, int trainingMinutes);
    }

}
