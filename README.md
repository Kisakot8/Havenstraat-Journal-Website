# School Journal Website

A website I made for my school journal. Visit now at https://havenstraatjournal.netlify.app/ to read the best humanities articles by high school students!


## Setup
For setup, you'll need to run both the Sanity Studio as well as the website itself. You put the articles into Sanity, and display them on the website. The code and dependencies for both are in this project, just in different folders.

### Sanity Setup
Sanity Studio requires a (free) account. You'll need a Sanity database with your project ID and title. To get started, go to https://sanity.io or /src/sanity/README.md.

Deploy the Sanity Studio to upload stuff to the website:
```bash
# Get to the sanity directory
cd src/sanity

# Installation
npm install

# Running website locally at localhost:3333
npm run dev

# When ready, deploy the Sanity Studio to your chosen URL (prompted)
sanity deploy
```

### Website Setup
Once you've uploaded your articles, authors, issues etc. to Sanity Studio, deploy the website. Make sure this is in **root directory**:
```bash
# Installation
npm install

# Running website locally at localhost:8080
npx @11ty/eleventy --serve
```
Open up http://localhost:8080 in your browser.

### Fetching
The website fetches from Sanity once every day, so changes in Sanity Studio may not be reflected in the website immediately. This is intentional so as to not make repeated requests, especially because Sanity has a monthly request and bandwidth limit for the free tier. 

The fetch frequency can be changed in the src/_data files, changing `duration: "1d"` as so:
```js
duration: "2d" // saves for 2 days
duration: "12h" // saves for 12 hours
duration: "30m" // saves for 30 minutes
duration: "*" // never fetch new data (after first success)
```
Refer to https://www.11ty.dev/docs/plugins/fetch/

