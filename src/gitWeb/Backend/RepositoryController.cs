using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using gitWeb.Backend.Helpers;
using LibGit2Sharp;
using LibGit2Sharp.Handlers;
using Microsoft.AspNetCore.Mvc;

namespace gitWeb.Backend
{
    public class RepositoryController : Controller
    {
        [HttpPost]
        [Route("/api/repository/fetch")]
        public IActionResult Fetch()
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                FetchOptions options = new FetchOptions();
                
                foreach (var remoteRepo in repo.Network.Remotes)
                {
                    Commands.Fetch(repo,remoteRepo.Name,new List<string>(), options,null);
                }
            }

            return Ok();
        }

        [HttpPost]
        [Route("api/repository/pull")]
        public IActionResult Pull()
        {
            return Ok();
        }
    }
}
