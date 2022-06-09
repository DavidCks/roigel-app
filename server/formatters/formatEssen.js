function formatBlock(dbdataBlock){
  const dateRaw = new Date(dbdataBlock.date);
  const day = dateRaw.toLocaleString("de-DE", { weekday: "short" });
  const month = dateRaw.toLocaleString("de-DE", { month: "short" });
  const date = dateRaw.toLocaleString("de-DE", { day: "numeric" });
  const selection = dbdataBlock.selection === 'm' ? 'meat' :
                    dbdataBlock.selection === 'v' ? 'vegi' : 'none';
  const extraMeat = dbdataBlock.extraM;
  const extraVegi = dbdataBlock.extraV;
  return { day, date, month, selection, extraMeat, extraVegi };
}

async function formatEssen(dbdata) {
  //placeholder for to-translate data (like 'm' to "meat")
  let selection = '';

  //create a new array with the first entry of [[{user}]]
  let data = [ [ { user: dbdata[0].user } ] ];
  //index for the new 2-dimensional data array
  let j = 0;
  //loop over all the datapoints given from the database
  for(let i = 0; i < dbdata.length; i++) {
    /*  first entry of the first dimension of the new array is 
        always an object containing the username
        hence we check if the current database data element is 
        still on the same user
    */
    if(data[j][0].user === dbdata[i].user) {
      /*  if its the same user we push the data from the 
          database onto the array in the desired format */
      dataBlock = await formatBlock(dbdata[i]);
      data[j].push( { ...dataBlock } );
    } else {
      /*  if we arrived at the entry for the next user we push a new array 
          onto the first dimension, containing an object containing the user, 
          just like the first entry made */
      data.push( [ { user: dbdata[i].user } ] );
      /*  increment the index so we're targeting the next element in the 
          first dimension */
      j++;
      
      /*  since we're on the entry for the new user already we need to push the data 
          from the database onto the array in the desired format at this point*/
      dataBlock = await formatBlock(dbdata[i]);
      data[j].push( { ...dataBlock } );
    }
  }

  return data;
}

module.exports = formatEssen;