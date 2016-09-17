using System;
using gitWeb.Backend.Helpers;
using LibGit2Sharp;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace gitWeb.Backend
{
    public class GitApiController : Controller
    {
        [HttpGet]
        [Route("/api/git/log")]
        public IActionResult GetRepoLog()
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                return Ok(string.Join(Environment.NewLine, repo.Commits.Select(d => d.Message).ToList()));
            }
        }

        [HttpGet]
        [Route("/api/git/branch")]
        public IActionResult GetBranchList()
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                return Ok(repo.Branches.Select(d => new {Name = d.FriendlyName, IsRemote = d.IsRemote}).ToList());
            }
        }
    }
}