using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LibGit2Sharp;

namespace gitLibTestingApp
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var repo = new Repository(@"C:\Projects\Own\gitWeb"))
            {
                foreach (StatusEntry item in repo.RetrieveStatus().OrderBy(d => d.State))
                {
                    Console.WriteLine("State: " + item.State + " Path: " + item.FilePath);

                    var patch = repo.Diff.Compare<Patch>(new List<string>() { item.FilePath });
                    Console.WriteLine("~~~~ Patch file ~~~~");
                    Console.WriteLine(patch.Content);

                }
            }

            Console.ReadLine();
        }
    }
}
