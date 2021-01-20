using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace UntanImport
{
    public class Worker : BackgroundService
    {
        private string currentConfigFile;
        private string currentWebSite;
        private readonly ILogger<Worker> _logger;

        public Worker(ILogger<Worker> logger)
        {
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                await Task.Delay(1000, stoppingToken);

                CheckForUpdatedConfig(@"C:\Users\Lukas\source\repos\Untan\UntanImport\UntanImport\Configs\untanimportconfig.xml");

                IDictionary<string, string> configData = GetConfigData();

                GetWebsiteData(configData);
            }

        }

        private void GetWebsiteData(IDictionary<string, string> configData)
        {
            string websiteToLookFor = configData["WebsiteToGet"];
            string compToLookFor = configData["CompanyToLookFor"];

            WebClient web = new WebClient();
            if (!File.Exists(currentWebSite))
            {
                File.Create(currentWebSite);
            }
            var byteSite = web.DownloadData("https://"+websiteToLookFor);

            File.WriteAllText(currentWebSite, web.Encoding.GetString(byteSite));

        }

        private IDictionary<string, string> GetConfigData()
        {
            IDictionary<string, string> toRet = new Dictionary<string, string>();
            XDocument document = XDocument.Load(currentConfigFile);
            foreach (var node in document.Descendants())
            {
                toRet.Add(node.Name.ToString(), node.Value.ToString());
            }
            return toRet;
        }

        private void CheckForUpdatedConfig(string configpath)
        { 
            //TODO: Logic for Updated ConfigFile
            currentConfigFile = configpath;
            currentWebSite = @"C:\Users\Lukas\source\repos\Untan\UntanImport\UntanImport\Websites\website.html";
        }
    }
}
