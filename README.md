# NYT-React-Search
A React-based rendition of the New York Times Article search application.


* Whenever a user runs the app on the local server or on the heroku app link, article headlines, the article link, and the article date is retrieved from the database. New articles could be added to database from New York Times API.

## See it live here: https://tranquil-taiga-22909.herokuapp.com

This app was made using axios to serve as the React helper to simplify the database interactions.

---

### Pre-requisites

* Install Node.js. visit https://nodejs.org/en/ and download

### Technologies used

*Node.js
*Express
*Axios
*request
*MongoDB
*Mongoose
*Mongolab
*React
*React-Router
*Babel
*Webpack

### Getting Started

Type `npm install` in the command line to install all the dependcies located within package.json

## Default test (included in package.json file)
In order to connect to the scraper web app on the local server, type the following in the command line:

 `node server.js`

The user will also be notified in the command line interface on which PORT its connected on.

```
Get `api/saved` will display all saved articles

Post `api/saved` will save an article

Delete `api/saved/:id` will delete an article of a spefici id
```
### Author
* [Hadi Yousufi](https://github.com/hadicodes)



