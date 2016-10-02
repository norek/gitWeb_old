using System;
using System.Collections.Generic;
using System.Linq;
//using System.Linq;
using gitWeb.Backend.Helpers;
using LibGit2Sharp;
using Microsoft.AspNetCore.Mvc;

namespace gitWeb.Backend
{
    public class CommitApiController : Controller
    {

        [HttpGet]
        [Route("/api/commit")]
        public IActionResult GetCommits()
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                var filter = new CommitFilter { SortBy = CommitSortStrategies.Topological };

                return Ok(repo.Commits.QueryBy(filter)
                .Select(d => new { d.Message, Id = d.Id.ToString(), Author = new { d.Author.Name, d.Author.When, d.Author.Email }, d.MessageShort }).ToList());
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

        [HttpGet]
        [Route("/api/commit/{id}/changes")]
        public IActionResult GetCommitDetails(string id)
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                Commit commit = repo.Commits.Single(d => d.Sha == id);

                Commit parent = commit.Parents.LastOrDefault();

                if (parent != null)
                {
                    var treeEntryChangeses = repo.Diff
                        .Compare<TreeChanges>(parent.Tree, commit.Tree)
                        .Select(d => new {Status = d.Status.ToString(), d.Path}).ToList();

                    return Ok(treeEntryChangeses);
                }

                return NotFound(id);
            }
        }
    }
}