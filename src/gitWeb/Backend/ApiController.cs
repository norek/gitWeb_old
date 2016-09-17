using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace gitWeb.Backend
{
    public class ApiController : Controller
    {
        [HttpGet]
        [Route("/api/hello")]
        public string Hello(string name)
        {
            return $"Hello {name}";
        }
    }
}
