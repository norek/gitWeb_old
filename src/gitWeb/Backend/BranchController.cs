using System;
using gitWeb.Backend.Helpers;
using LibGit2Sharp;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace gitWeb.Backend
{
    public class BranchController : Controller
    {
        [HttpGet]
        [Route("/api/branch")]
        public IActionResult GetBranchList()
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                
                
                return Ok(repo.Branches.Select(d => new {Name = d.FriendlyName, IsRemote = d.IsRemote,d.IsCurrentRepositoryHead,d.Commits.First().Sha}).ToList());
            }
        }
    }
}