using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace FoodToCalories
{
    public class FoodToCalories : IFoodToCalories
    {
        private static string appId = "8f7f64ad";
        private static string appKey = "5a8ffe7b58f13d7445d890a72f971a64";

        public IDictionary<string, string> GetCalories(string food)
        {
            string foodId = GetFoodId(food);
            string url = "https://api.nutritionix.com/v1_1/item?id=" + foodId + "&appId=" + appId + "&appKey=" + appKey;
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(url);
            request.Method = "GET";

            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            StreamReader sr = new StreamReader(response.GetResponseStream());
            string result = sr.ReadToEnd();
            JObject json = JObject.Parse(result);
            IDictionary<string, string> foodInfo = new Dictionary<string, string>();
            if (json["nf_calories"].Type != JTokenType.Null)
            {
                foodInfo.Add("calories", json["nf_calories"].Value<string>());
            }
            if (json["nf_total_fat"].Type != JTokenType.Null)
            {
                foodInfo.Add("fat", json["nf_total_fat"].Value<string>());
            }
            if (json["nf_cholesterol"].Type != JTokenType.Null)
            {
                foodInfo.Add("cholesterol", json["nf_cholesterol"].Value<string>());
            }
            if (json["nf_sodium"].Type != JTokenType.Null)
            {
                foodInfo.Add("soduim", json["nf_sodium"].Value<string>());
            }
            if (json["nf_sugars"].Type != JTokenType.Null)
            {
                foodInfo.Add("sugars", json["nf_sugars"].Value<string>());
            }
            if (json["nf_protein"].Type != JTokenType.Null)
            {
                foodInfo.Add("protein", json["nf_protein"].Value<string>());
            }
            if (json["nf_vitamin_a_dv"].Type != JTokenType.Null)
            {
                foodInfo.Add("vitamin_a", json["nf_vitamin_a_dv"].Value<string>());
            }
            if (json["nf_vitamin_c_dv"].Type != JTokenType.Null)
            {
                foodInfo.Add("vitamin_c", json["nf_vitamin_c_dv"].Value<string>());
            }
            if (json["nf_calcium_dv"].Type != JTokenType.Null)
            {
                foodInfo.Add("calcium", json["nf_calcium_dv"].Value<string>());
            }
            if (json["nf_iron_dv"].Type != JTokenType.Null)
            {
                foodInfo.Add("iron", json["nf_iron_dv"].Value<string>());
            }
            if (json["nf_serving_size_unit"].Type != JTokenType.Null)
            {
                foodInfo.Add("unit", json["nf_serving_size_unit"].Value<string>());
            }
            return foodInfo;
        }

        private string GetFoodId(string food)
        {
            if (food == null)
            {
                throw new Exception("Error - Invalid parameter, food is null");
            }
            string url = "https://api.nutritionix.com/v1_1/search/" + food + "?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=" + appId + "&appKey=" + appKey;
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(url);
            request.Method = "GET";

            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            StreamReader sr = new StreamReader(response.GetResponseStream());
            string result = sr.ReadToEnd();
            JObject json = JObject.Parse(result);
            JToken totalHits = json["total_hits"];
            if (totalHits == null)
            {
                throw new Exception("Error - Response from API isn't valid");
            }
            if (totalHits.Value<int>() > 0)
            {
                JToken hits = json["hits"];
                return hits.First()["_id"].Value<string>();
            }
            else
            {
                throw new Exception("No results for '" + food + "'");
            }
        }
    }
}
