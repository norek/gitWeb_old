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
                var filter = new CommitFilter { SortBy = CommitSortStrategies.Topological };

                foreach (Commit c in repo.Commits.QueryBy(filter))
                {
                    Tree tree = repo.Lookup<Tree>(c.Sha);

                    if (tree != null)
                        foreach (var treeentry in tree)
                        {
                        
                        }

                    Console.WriteLine(c);   // Of course the output can be prettified ;-)
                }

            }
        }
    }
}
