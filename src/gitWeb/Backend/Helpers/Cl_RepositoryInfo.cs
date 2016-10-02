namespace gitWeb.Backend.Helpers
{
    /// <summary>
    /// Remove and create path pickup
    /// </summary>
    public static class Cl_RepositoryInfo
    {
        public static string Path => System.IO.Path.GetDirectoryName(
            System.IO.Path.GetDirectoryName(System.IO.Directory.GetCurrentDirectory()));
    }
}