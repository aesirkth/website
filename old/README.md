
# ÆSIR Website
This is the repository of the website of ÆSIR - Association of Engineering Students in Rocketry. Improvements are welcome!

## How it's built

The website is built using [preact-cli](https://github.com/developit/preact-cli). 
In short, that means that we build it by writing modern JavaScript.

Website markup is written using [JSX](https://reactjs.org/docs/introducing-jsx.html), a sort of HTML-in-JavaScript syntax for declaring HTML output in code. JSX is found in components, which are rendered into HTML with [preact](https://github.com/developit/preact).

Styles are written in [SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html).


### Testing

All commits to all branches and pull requests are tested with [Travis CI](https://travis-ci.org). Tests for this repository can be seen on https://travis-ci.org/aesirkth/website. 
Current build status:

![Build status](https://travis-ci.org/aesirkth/website.svg?branch=master)

### Deployment

Deployments of this website are done automatically from the `master` branch to [Netlify](https://www.netlify.com) on [https://aesir.se](https://aesir.se), when tests pass. All pull requests are also deployed for easier reviewing of changes - links to review deployments can be found in each pull request.

## Developing

### Setup
To do local development, you need [nodejs](https://nodejs.org/en/) installed.

In the project root, install the dependencies: `npm install`.


### Commands
To start a development server:
  `npm run dev`

To create a production build:
  `npm run build`

To start a production server:
  `npm run start`