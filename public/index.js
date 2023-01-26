// let zipCode= document.getElementById(zipCode)
 let info;
// let displayData = document.getElementById(displayData)


async function zipCode(zipcode) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b6fd429afdmsh5d6de1aa5a13d26p16a711jsnac8f43c6abfd',
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(`https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=${zipcode}&offset=0&limit=2`, options);
      const data = await response.json();
      
      //console.log(data.data.home_search.results)

      info = data.data.home_search.results

      console.log("Primary Photo:", info[0].primary_photo);
      console.log("List Price:", info[0].list_price);
      console.log("Sqft:", info[0].description.sqft);
      console.log("Address:", info[0].location.address);

    } catch (err) {
      console.error(err);
    }
  }

  zipCode("77590");






  


