# static-feed-aggregator
An RSS aggregator that generates a simple embeddable static Markdown page


Description
---
Have a static website that uses an engine that supports Markdown? With this script, makes it very easy for you to add a page that shows the newest posts from your favourite websites, using RSS. 

Usage
---
Just install it as a node package with:

```
npm install -global <package-dir>
```

Feed it a list of the feeds you want to display and it would output the page.

```
cat feed-sites | static-feed-aggregator > feeds.md
```

Or without installing:


```
echo -e "http://proses.io/feed\nhttps://rin.io/feed" | node <package-dir>/index.js > feeds.md
```

Here is the result

# [Read](https://abuseofnotation.github.io/static-feed-aggregator/feed).
