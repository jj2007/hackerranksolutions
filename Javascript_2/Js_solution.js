"use strict";

var axios = require("axios");

async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
  let country = "";
  let result = undefined;

  let pages = await axios.get(
    "https://jsonmock.hackerrank.com/api/countries?page=1"
  );
  let totalpages = await pages.total_pages;
  for (let i = 1; i <= totalpages; i++) {
    let countries = await axios.get(
      `https://jsonmock.hackerrank.com/api/countries?page=${i}`
    );
    //let mycountry = await countries.json()
    result = await countries.find(el => {
      el.alpha2Code === code;
    });
    if (result) {
      return result.name;
      break;
    }
  }
}
