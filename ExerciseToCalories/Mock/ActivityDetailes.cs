using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Mock
{
    [DataContract]
    public class ActivityDetailes
    {
        [DataMember]
        public string Id
        {
            get; internal set;
        }

        [DataMember]
        public string Name
        {
            get; internal set;
        }

        internal int CaloriesPerHourse
        {
            get; set;
        }
    }
}
