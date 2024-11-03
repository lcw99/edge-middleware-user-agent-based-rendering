
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
    var botPattern = "(googlebot\/|bot|Googlebot-Mobile|...)";
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