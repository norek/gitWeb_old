﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using gitWeb.Backend.Helpers;
using gitWeb.Core.ChangeFormatter.ChangeFormatter;
using gitWeb.Core1.ChangeFormatter.ChangeFormatter;
using LibGit2Sharp;
using Microsoft.AspNetCore.Mvc;

namespace gitWeb.Backend
{

    public class ChangesController : Controller
    {
        [HttpGet]
        [Route("api/changes")]
        public IActionResult GetChanges()
        {
            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                var localChanges = repo.RetrieveStatus()
                                    .OrderBy(d => d.State)
                                    .Where(d => d.State != FileStatus.Ignored)
                                    .Select(d => new { state = d.State.ToString(), filePath = d.FilePath })
                                    .ToList();

                return Ok(localChanges);
            }
        }

        [HttpGet]
        [Route("api/changes/details")]
        public IActionResult GetChange([FromQuery] string filePath)
        {
            if (string.IsNullOrEmpty(filePath))
            {
                NotFound();
            }

            using (var repo = new Repository(Cl_RepositoryInfo.Path))
            {
                Patch patch = repo.Diff.Compare<Patch>(new List<string>() { filePath });

                ChanageContentFormatter contentFormatter = new ChanageContentFormatter();
                List<Hunk> formattedContent = contentFormatter.Format(patch.Content);

                var fileChange = new
                {
                    filePath,
                    content = patch.Content,
                    linesAdded = patch.LinesAdded,
                    linesDeleted = patch.LinesDeleted,
                    hunks = formattedContent
                };

                return Ok(fileChange);
            }
        }
    }
}
