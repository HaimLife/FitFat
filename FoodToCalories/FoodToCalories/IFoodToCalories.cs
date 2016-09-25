using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace FoodToCalories
{
    [ServiceContract]
    public interface IFoodToCalories
    {
        [OperationContract]
        IDictionary<string, string> GetCalories(string food);
    }
}
