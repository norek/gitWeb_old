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
                return
                    Ok(repo.Branches.Select(d =>
                                new
                                {
                                    Name = d.FriendlyName,
                                    isRemote = d.IsRemote,
                                    isCurrentRepositoryHead = d.IsCurrentRepositoryHead,
                                    tipSha = d.Tip.Sha
                                }).ToList());
            }
        }

        //[HttpGet]
        //[Route("/api/branch/{id}/commit")]
        //public IActionResult GetCommits()
        //{
        //    using (var repo = new Repository(Cl_RepositoryInfo.Path))
        //    {
        //        var filter = new CommitFilter { SortBy = CommitSortStrategies.Topological };

        //        return Ok(repo.Commits.QueryBy(filter)
        //        .Select(d => new { d.Message, Id = d.Id.ToString(), Author = new { d.Author.Name, d.Author.When, d.Author.Email }, d.MessageShort }).ToList());
        //    }
        //}
    }
}