using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using gitWeb.Backend.Helpers;
using LibGit2Sharp;
using Microsoft.AspNetCore.Mvc;

namespace gitWeb.Backend
{
    public class TagApiController : Controller
    {
        [HttpGet]
        [Route("/api/tags")]
        public IActionResult GetTagList()
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                return Ok(repo.Tags.Select(d => new { Name = d.FriendlyName }).ToList());
            }
        }
    }
}
