# feed-aggregator

Have a static website that uses an engine that supports Markdown? With this script, makes it very easy for you to add a page that shows the newest posts from your favourite websites, using RSS.

Works also with  Github actions and Github pages

# Usage


## Locally

If you want to build the page locally 

1. Just install it as a node package with:

```
npm install -global <package-dir>
```

2. Feed it a list of the feeds you want to display and it would output the page.

```
cat feed-sites | static-feed-aggregator > feeds.md
```
Or without installing:
```
echo -e "http://proses.io/feed\nhttps://rin.io/feed" | node <package-dir>/index.js > feeds.md
```
3. Publish the result in any way that you want.

You would also probably want to schedule this job to run regularly, for example using cron. 

## Using Github actions

If you want to run the same page as the demo, you use the Github action that is set up for this project:
1. Fork this Github repo by following this link: https://github.com/abuseofnotation/feed-aggregator/generate 
2. Edit the `feed-sites` file and add the list of feeds you want to follow (remember, those should be URL's of feeds, not websites).
3. Head over to the `feeds.md` file to see content from those sites (the page will be updated every day).

# [Read](/feeds.md)
