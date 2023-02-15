let zipCode= document.getElementById("zipcode")
let agentZipCode = document.getElementById("Agentzipcode")
let homeInfo;
let showData = document.getElementById("showData")
let agentInfo;
let agents = document.getElementById("agents")
let loadMore = document.getElementById("loadMore")
let limit = 12; 

// Full screen Pop-up 
const elem = document.getElementById("popup");
if (elem.requestFullscreen) {
  console.log("Screnn Mode")
  elem.requestFullscreen();
}




// Homes for sale API 
async function getForSale() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
      }
    };
    // userInputArray saves the value of the search input and split it
      let userInputArray = zipCode.value.split(", ")
      let city = userInputArray[0]
      let usState = userInputArray[1]
      console.log(userInputArray)
    try {
      const response = await fetch(`https://us-real-estate.p.rapidapi.com/v2/for-sale?offset=0&limit=${limit}&state_code=${usState}&city=${city}&sort=newest`, options);
      const result = await response.json();
      homeInfo = result.data.home_search.results
      showData.innerHTML = render(homeInfo)
      loadMore.style.display = "block"  
    } catch  {
      err => console.error(err);
    }
  }
// loadMore will load 12 more homes once the button is clicked 
  loadMore.addEventListener("click", () => {
    limit += 12
    loadMore.style.display = "block"
    getForSale();
  })

//   Fucntion to loop inside the results array and to create a card that diplays the code
  function render(objectArray){
    
    let homeInfoArr = objectArray.map(house => {
        console.log(house)
        // Adding comma to the price 
        var price = house.list_price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
        // Returns card 
        return `
        <div class="card mt-5" style="width: 18rem;">
                <img src="${house.photos[0].href}" class="card-img-top" style="height: 100%" alt="...">
                <div class="card-body" style="max-width:100%">
                <h5 class="card-title">The Price: $${price}</h5>
                <p class="card-text"><b>The Address: </b>${house.location.address.line} ${house.location.address.city}, ${house.location.address.state}, ${house.location.address.postal_code}</p>
                <a href="https://www.realtor.com/realestateandhomes-detail/${house.permalink}" class="btn" style="background-color: #FB6444; color: white" target="_blank">Check The Listing</a>
                
                </div>
        </div>    
                    `     
  }
     )
    return homeInfoArr.join("") 
}
// Fetch call to the Agent Info
async function getAgents() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(`https://realty-in-us.p.rapidapi.com/agents/list?postal_code=${agentZipCode.value}&offset=0&limit=8&sort=recent_activity_high&types=agent`, options);
    const result = await response.json();
    // The result will be saved in the agentInfo var
    agentInfo = result.agents
    agents.innerHTML = display(agentInfo)
  } catch {
    err=> console.error(err);
  }
}
// Loop in the array of objects for the agent 
function display(agentArray){
  let agentInfoArr = agentArray.map(agent => {
      return `
      <div class="card mt-5" style="width: 18rem;">
              <img src="${agent.photo.href}" class="card-img-top" style="height: 100%" alt="...">
              <div class="card-body">
              <h5 class="card-title">Agent Name : ${agent.person_name}</h5>
              <h5 class= "card-title">Agent Rating : ${agent.agent_rating}</h5>
              <h5 class= "card-title">Email: ${agent.email}</h5>
              <p class="card-text"></p>
              <a href="${agent.web_url}" class="btn" style="background-color: #FB6444; color: white" target="_blank">Find Agent</a>
              </div>
      </div>    
            `     
}
   )
  return agentInfoArr.join("")
}
//Google Autocomplete Api
function activatePlacesSearch () {
  let autoComplete = new google.maps.places.Autocomplete(zipCode);

}
  


