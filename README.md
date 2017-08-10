# Hollowverse Design

This repo is the source of truth of Hollowverse.com UI and UX. 
It communicates through HTML, CSS, and JS.

However, the code in this repo is not the main concern. The main concern is the final output 
on the browser.

## How to use this repo

1. Clone it, and `cd` into it
2. Install [Node.js](https://nodejs.org/en/).
3. Install Node Package Manager `sudo npm install npm -g`.
4. Install all dependencies `npm install`.
5. Now you can run development server on localhost `npm start` or build the bundle `npm run build` for production.

## Develop

Run `npm start`. It runs the app in development mode on `localhost:8080` with hot loading. Also the website is available by IP address of the host with port 8080 from devices, connected to the current local network for testing on mobile devices.

## Build

Run `npm run build`. It compiles and replaces `public/js/bundle.js`.

## Roles

### Designer

The designer builds the UI/UX of pages in CSS, HTML, and JS.

### Developer

The developer migrates the exact UI/UX of those pages to the 
[main repo](https://github.com/hollowverse/hollowverse) where code is a main concern. 
