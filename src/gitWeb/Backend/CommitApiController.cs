using System.Linq;
using gitWeb.Backend.Helpers;
using LibGit2Sharp;
using Microsoft.AspNetCore.Mvc;

namespace gitWeb.Backend
{
    public class CommitApiController : Controller
    {

        [HttpGet]
        [Route("/api/commit")]
        public IActionResult GetRepoLog()
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                return Ok(repo.Commits.Select(d => new { d.Message, Id = d.Id.ToString() }).ToList());
            }
        }

        [HttpGet]
        [Route("/api/commit/{term}")]
        public IActionResult GetCommitByTerm(string term)
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                var vrlCommits = repo.Commits.Where(d => d.Message.Contains(term.ToLower())).Select(d => new { d.Message, Id = d.Id.ToString() }).ToList();
                return Ok(vrlCommits);
            }
        }
    }
}