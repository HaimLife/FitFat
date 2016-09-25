using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace Mock
{
    public class CaloriesCalculator : ICaloriesCalculator
    {
        public ActivityDetailes[] GetAllActivities()
        {
            return ActivityMock.Detailes.ToArray();
        }

        public int GetBurnedCalories(string id, int trainingMinutes)
        {
            var activity = ActivityMock.Detailes.FirstOrDefault(detailes => detailes.Id == id);
            if (activity == null)
            {
                throw new NullReferenceException("The id don't exists in the db");
            }
            return (activity.CaloriesPerHourse * trainingMinutes) / 60;
        }
    }
}
