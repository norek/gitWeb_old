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
                var commitIdToTagLookup = CreateCommitIdToTagLookup(repo);

                //var allbranches = repo.Branches.ToList();

                var filter = new CommitFilter
                {
                    SortBy = CommitSortStrategies.Topological,
                    IncludeReachableFrom = repo.Refs
                };

                //var commitsFromBranch = allbranches.SelectMany(d => d.Commits.Select(w => new
                //{
                //    w.Message,
                //    Id = w.Id.ToString(),
                //    Author = new { w.Author.Name, w.Author.When, w.Author.Email },
                //    w.MessageShort
                //}).ToList(), (branch, commit) => new {branchName = branch.FriendlyName,commit.Message,commit.Author,commit.Id,commit.MessageShort}).ToList();




                var commitList = repo.Commits.QueryBy(filter).Select(w => new
                {
                    w.Message,
                    Id = w.Id.ToString(),
                    Author = new { w.Author.Name, w.Author.When, w.Author.Email },
                    w.MessageShort
                }).ToList();

                var fullCommitList = (from commit in commitList
                                      join tag in commitIdToTagLookup on commit.Id equals tag.Key into gj
                                      from subTag in gj.DefaultIfEmpty()
                                      select new
                                       {
                                           commit.Message,
                                           Id = commit.Id,
                                           Author = new { commit.Author.Name, commit.Author.When, commit.Author.Email },
                                           commit.MessageShort,
                                           tags = subTag?.FirstOrDefault()
                                       }).ToList();

                return Ok(fullCommitList);
            }

        }

        private static ILookup<string, string> CreateCommitIdToTagLookup(Repository repo)
        {
            var commitIdToTagLookup =
                repo.Tags
                    .Select(tag => new { Commit = tag.PeeledTarget as Commit, Tag = tag })
                    .Where(x => x.Commit != null)
                    .ToLookup(x => x.Commit.Sha, x => x.Tag.FriendlyName);

            return commitIdToTagLookup;
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
                        .Select(d => new { Status = d.Status.ToString(), d.Path }).ToList();

                    return Ok(treeEntryChangeses);
                }

                return NotFound(id);
            }
        }
    }
}