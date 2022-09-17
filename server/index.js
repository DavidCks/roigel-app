// server/index.js
const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//connecting to the postgreSQL server happens in here
const connectdb = require("./connectdb");

//formating the data for the Essensanmeldung from the database happens in here
const formatEssen = require("./formatters/formatEssen");
const { format } = require('path');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

/**
 *  @api {get} /api/essen/:dateFrom/:dateTo Request dates ranging from dateFrom to dateTo
 *  @apiName GetDates
 *  @apiGroup Essensanmeldung
 *  
 *  @apiParam {integer} dateFrom first date to get the entries of
 *  @apiParam {integer} dateTo last date to get the entries of
 *  
 */

app.get("/api/essen/:dateFrom/:dateTo", (req, res) => {
  //dates in standart date format (aka. seconds since 1970)
  let dateFrom = req.params.dateFrom;
  let dateTo = req.params.dateTo;

  //filter out wrong or malicious requests; Only accept integers as parameters for the dates
  const onlyNumbersRegex = new RegExp('^[0-9]*$');
  if(!onlyNumbersRegex.test(dateFrom) || !onlyNumbersRegex.test(dateTo)) {
    res.json({ error: "only decimals are allowed for the variables 'dateFrom' and 'dateTo\'" });
    return;
  }

  //execute the query and return 
  (async () => {
    //connect to the database by creating a new connectdb instance
    const db = await new connectdb;

    //convert UNIX Timestamps to actual dates
    dateFrom = new Date(dateFrom * 1000 + 7200000 );
    dateTo = new Date(dateTo * 1000 + 7200000 );

    //set up the query
    const query = { 
      text: "SELECT * FROM \"Essensanmeldung\" WHERE \"date\" BETWEEN $1 and $2 ORDER BY \"user\" ASC, \"date\" ASC",
      values: [dateFrom, dateTo],
    }

    //execute the query
    const result = await db.query(query);
    
    await console.log(result)

    //format the data for the frontend
    const response = await formatEssen(result);

    //return the resulting object as a json body
    res.set('Content-Type', 'application/json');
    res.json({ response: response });
  })();
});


// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});