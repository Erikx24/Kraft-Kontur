/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.kraft-kontur.de', // Ersetze durch deine Domain
    generateRobotsTxt: true,          // Generiert auch eine robots.txt
    changefreq: 'yearly',              // Wie oft sich Inhalte ändern (optional)
    priority: 0.7,                    // Priorität der Seiten (optional)
    sitemapSize: 5000,                // Maximalanzahl von URLs pro Sitemap-Datei
    generateIndexSitemap: false,      // Setze auf true, wenn mehrere Sitemaps generiert werden sollen
  };