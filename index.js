#!/usr/bin/env node
import { extract } from '@extractus/feed-extractor'
import readline from 'readline';
'use strict'

// extract a RSS
const sites = []

const descriptionCharacterCount = 1000
const articlesCount = 100


const print = (a) => {
  console.log(a)
  return a;
}

const byPublishedDate = (a, b) => (new Date(b.published) - new Date(a.published))

const getEntries = (site) => site.entries
  .map((entry) => ({...entry, site}))

const formatAsMarkdown = ({title, description, link, published, site}) => `
[${title}](${link})
---

${site.title} --- ${new Date(published).toLocaleDateString()}

${description.slice(0, descriptionCharacterCount)}
`

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  if (line.trim()) {
    sites.push(line.trim());
  }
});

rl.on('close', () => {
  Promise.allSettled(sites.map(extract))
    .then((results) => 
      results
        .flatMap((result, i) => {
          if (result.status === "fulfilled") {
            return [result.value]
          } else {
            process.stderr.write("Could not retrieve " + sites[i])
            return []
          }
        }) 
        .map(getEntries)
        .flat()
        .sort(byPublishedDate)
        // .map(print)
        .slice(0, articlesCount)
        .map(formatAsMarkdown)
        .join('\n')
      )
      .then(console.log)
});

rl.on('error', (err) => {
  console.log(err);
});
