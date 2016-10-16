using System;
using System.Collections.Generic;
using gitWeb.Core.ChangeFormatter.ChangeFormatter;

namespace gitWeb.Core1.ChangeFormatter.ChangeFormatter
{
    public class ChanageContentFormatter
    {
        private const string _hunkSeparator = "@@";
        private const string _orginalFilePrecededSeparaor = "---";
        private const string _newFilePrecededSeparator = "+++";
        private const string _additionalLineChange = "+";
        private const string _removeLineChange = "-";
        private const int _headerLenght = 4;

        public List<Hunk> Format(string content)
        {
            if (string.IsNullOrEmpty(content))
            {
                return new List<Hunk>();
            }

            string[] contentLines = content.Replace(' ', '\u00a0').Split(Environment.NewLine.ToCharArray());

            List<Hunk> hunkList = new List<Hunk>();
            Hunk hunk = null;
            for (int i = _headerLenght; i < contentLines.Length; i++)
            {
                string currLine = contentLines[i];

                if (currLine.IndexOf(_hunkSeparator, StringComparison.Ordinal) == 0)
                {

                    hunk = new Hunk();
                    hunk.Header = currLine;
                    hunk.Lines = new List<Line>();
                    hunkList.Add(hunk);

                }
                else
                {
                    if (hunk == null)
                    {
                        continue;
                    }

                    Line newLine = new Line();
                    if (currLine.IndexOf(_additionalLineChange, StringComparison.Ordinal) == 0)
                    {
                        newLine.Type = 1;
                        currLine = currLine.Substring(1);
                    }
                    else if (currLine.IndexOf(_removeLineChange, StringComparison.Ordinal) == 0)
                    {
                        newLine.Type = 2;
                        currLine = currLine.Substring(1);
                    }
                    else
                    {
                        newLine.Type = 0;
                    }

                    newLine.Content = currLine;
                    hunk.Lines.Add(newLine);

                }
            }

            return hunkList;
        }
    }
}