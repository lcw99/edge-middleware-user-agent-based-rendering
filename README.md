
# Enhancing SEO in Flutter Web Projects with Next.js Integration

When building websites with Flutter, a significant challenge encountered is Search Engine Optimization (SEO). The main issue arises because search engine crawlers often fail to index the text content in Flutter web applications. This limitation stems from the fact that Flutter web builds essentially result in static websites, which aren't crawler-friendly by default.

Addressing this challenge with Flutter alone is a daunting task. Given the nature of static sites produced by Flutter web builds, incorporating an additional web project, like one built with Next.js, becomes essential. This approach is not only about solving crawling issues but also about dynamically providing appropriate meta tags based on the content, which is nearly impossible with just Flutter.

Rather than struggling with these limitations, a practical solution involves embedding your Flutter web site within a server-side rendering project like Next.js. This method allows for significant improvements in SEO. For instance, you can detect web crawlers and return suitable meta tags accordingly. Similarly, for content within your Flutter web that needs to be exposed to crawlers, presenting a slimmed-down HTML version without CSS proves to be highly effective.

## Here's a basic example of how to integrate a Flutter web project within a Next.js project:

1. **Create a Next.js Project:**
   First, set up a new Next.js project if you don't have one already.
   ```bash
   npx create-next-app my-nextjs-project
   cd my-nextjs-project
   ```

2. **Include Your Flutter Web Project:**
   Place your built Flutter web project in the `public` directory of your Next.js project.
   ```plaintext
   my-nextjs-project/
   ├── public/
   │   └── flutter_web_project/   # Your Flutter web build files
   └── ...
   ```

3. **Server-Side Rendering with Next.js:**
   In your Next.js pages, use server-side rendering to detect crawlers and modify meta tags dynamically. Here's an example of a basic setup of middleware.ts:
   ```jsx
  import { NextRequest, NextResponse, userAgent } from 'next/server'

  // Set pathname were middleware will be executed
  export const config = {
    matcher: ['/', '/home/:path*'],
  }

  export function middleware(req: NextRequest) {
    const ua = userAgent(req)
    const isLocalHost = req.nextUrl.host.includes("localhost")
    // const isLocalHost = false;
    var botPattern = "(googlebot\/|bot|Googlebot-Mobile|Mediumbot-MetaTagFetcher|Google-InspectionTool|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    var re = new RegExp(botPattern, 'i');
    var isBot = re.test(ua.ua);

    if ((isBot || isLocalHost) && req.nextUrl.pathname == "/") {
      req.nextUrl.pathname = "_viewport/bot_root"
      return NextResponse.rewrite(req.nextUrl)
    }

    if (req.nextUrl.pathname.endsWith(".md")) {
      if (isBot || isLocalHost) {
        var mdPath = req.nextUrl.pathname.substring(req.nextUrl.pathname.lastIndexOf("/") + 1)
        req.nextUrl.searchParams.set("md", mdPath)
        req.nextUrl.pathname = "_viewport/bot"
        return NextResponse.rewrite(req.nextUrl)
      }
    }
    req.nextUrl.pathname = "/index.html"
    return NextResponse.rewrite(req.nextUrl)
  }
   ```
## Conclusion:

Integrating a Flutter web project into a server-side rendered framework like Next.js not only resolves crawling issues but also opens up the door for dynamic meta tag management and better overall SEO performance. This approach leverages the strengths of both technologies, offering a more comprehensive solution for web development.

## Important Note:

To implement this integration successfully, it's essential to modify the URL strategy in your Flutter web project. By default, Flutter uses hash (`#`) in the URLs, which can be problematic for SEO. To enhance the SEO, you should switch to using the 'path' URL strategy that doesn't include the hash.

You can change this in your Flutter web project by utilizing the `url_strategy` package. Here’s how to set it up:

1. Add the `url_strategy` package to your `pubspec.yaml` file:
   ```yaml
   dependencies:
     url_strategy: ^0.2.0
   ```

2. Set the URL strategy to 'path' in your main.dart:
   ```dart
   import 'package:url_strategy/url_strategy.dart';

   void main() {
     setPathUrlStrategy(); // Use path-based URLs instead of hash-based
     runApp(MyApp());
   }
   ```

By doing this, your Flutter web URLs will be cleaner and more SEO-friendly, which is crucial for better indexing by search engines.