#!/usr/bin/env node
import { extract } from '@extractus/feed-extractor'
import readline from 'readline';
'use strict'

// extract a RSS
const sites = []

const descriptionCharacterCount = 1000
const articlesCount = 1000


const print = (a) => {
  console.log(a)
  return a;
}

const byPublishedDate = (a, b) => (new Date(b.published).getTime()) - (new Date(a.published).getTime())

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
    sites.push(extract(line.trim()));
  }
});

rl.on('close', () => {
  Promise.all(sites)
    .then((sites) => 
      console.log(sites.map(getEntries)
        .flat()
        .sort(byPublishedDate)
        // .map(print)
        .slice(0, articlesCount)
        .map(formatAsMarkdown)
        .join('\n')
      )).then(() => process.exit(1))
});

rl.on('error', (err) => {
  console.log(err);
});
