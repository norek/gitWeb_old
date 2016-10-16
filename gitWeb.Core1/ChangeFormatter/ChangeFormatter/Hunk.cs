using System.Collections.Generic;

namespace gitWeb.Core.ChangeFormatter.ChangeFormatter
{
    public class Hunk
    {
        public string Header { get; set; }
        public List<Line> Lines { get; set; }
    }
}