let zipCode= document.getElementById("zipcode")
 let homeInfo;
let showData = document.getElementById("showData")



async function getForSale() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b6fd429afdmsh5d6de1aa5a13d26p16a711jsnac8f43c6abfd',
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(`https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=${zipcode.value}&offset=0&limit=15`, options);
      const result = await response.json();
  
      homeInfo = result.data.home_search.results

    // Saves the 
      showData.innerHTML = render(homeInfo)
      // console.log(linkInfo)

    } catch  {
      err => console.error(err);
    }
  }

//   Fucntion to loop inside the results array and to create a card that diplays the code
  function render(objectArray){
    let homeInfoArr = [];
    objectArray.map(house => {
      homeInfoArr.push(house)
      // console.log(house)
        return `
        <div class="card mt-5" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">The Price:$ ${house.list_price}</h5>
                <p class="card-text">The Address:${house.location.address.line} ${house.location.address.city}, ${house.location.address.state}, ${house.location.address.postal_code}</p>
                <a href="https://www.realtor.com/realestateandhomes-detail/${house.permalink}" class="btn btn-primary">Chick The Listing</a>
            </div>      `     
  }
     )
    
    console.log(homeInfoArr)
    return homeInfoArr;
  
}






  


