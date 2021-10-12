
// Q-1: Get all the countries from Asia continent /region using Filter function
// Q-2: Get all the countries with a population of less than 2 lakhs using Filter function
// Q-3Print the following details name, capital, flag using forEach function
// Q-4: Print the total population of countries using reduce function
// Q-5:  Print the country which uses US Dollars as currency.

  const getCountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  
    xhr.responseType = "json";
  
    xhr.onload = () => {
     //  console.log(xhr.response);
     //Q-1
       const countries = xhr.response;
       let Asia = countries.filter(country => country.region == "Asia").map(country => country.name);
       console.log("Asian continent regions:")
       console.log(Asia)
        //Q-2
       let population = countries.filter(country => country.population < 200000).map(country => country.name);
       console.log("countires with less than 2lakh population:")
       console.log(population);
       //Q-3
       countries.forEach(country => {
         console.log(country.name)
         console.log(country.capital)
         console.log(country.flag)
       });
       //Q-4
       const totalPopulation = countries.reduce((sum , country) => sum + country.population , 0);
       console.log(`The total population of world is_${totalPopulation}: it's time that we move on to MARS :)`)
      //Q-5
      let currency = countries.filter(country => country.currencies[0].symbol == "$").map(country => country.name);
      console.log(currency)
  }
    xhr.send()
  }
  getCountries();
 //sir i want to Print the country which uses US Dollars as currency i have used filter but i can't print the currencies giving an empty array


// blogs.forEach(blog => {
//   for (let key in blog) {
//      function Asia(){
//        if(blog.name == "Asia"){
//          return true
//        }
//      }
//      let Asiaconti = blogs.filter(Asia)
//        console.log(Asiaconti)
//    }
// });

