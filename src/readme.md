# /src

This is the main folder where all of the web app lives.

## /components

All React components and their respective styles live inside `/components/`.

## /containers

Page templates that require data to be fetched should be placed in `/containers` and referenced inside the top-level `static.config.js`.

## /pages

Page templates that do not require data fetching can be placed in `/pages`, where their file names will be converted into a path.
For example `/pages/about.tsx` turns into the page `/about`.

## /data

Content for the page, including images, live inside `/data`.

## /hooks

All [React hooks](https://reactjs.org/docs/hooks-reference.html) live inside `/hooks`.
