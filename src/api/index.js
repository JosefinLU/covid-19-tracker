//to make functions to fetch the data that we need

import axios from "axios";

// url for the api - json
const url = "https://covid19.mathdro.id/api";

//function to fetch the data, an errorfunc
//- axios function, to handle a syncronize data we use async
// a try and catch, it the fetch is succesful --> try
// catch if the fetch is not successful
// inside the try, you get the data
export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    //to get the data
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    // created an object to only get the data we want (not all of it as before from the api)
    //const modifiedData = {
    // the data we want: alt 1
    /*
        confirmed: data.confirmed,
        recovered: data.recovered,
        deaths: data.deaths,
        lastUpdate: data.lastUpdate,
        */
    /*to make it cleaner alt 2, we put in the const data the prop
       confirmed,
       recovered,
       deaths,
       lastUpdate,
    }*/

    // returning the response with the api, the data we modified, alt 3 cleanest way
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    //efter lopat igenom arryn så rerurn landets namn
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
