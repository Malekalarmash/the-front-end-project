let zipCode= document.getElementById("zipcode")
let homeInfo;
let showData = document.getElementById("showData")
let agentInfo;
let agents = document.getElementById("agents")

async function getForSale() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e92f57d6ccmsh3dfe1db769bdc3cp157abfjsn46c2a47c1c0a',
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
    let homeInfoArr = objectArray.map(house => {
        return `
        <div class="card mt-5" style="width: 18rem;">
                <img src="${house.primary_photo.href}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">The Price:$ ${house.list_price}</h5>
                <p class="card-text">The Address:${house.location.address.line} ${house.location.address.city}, ${house.location.address.state}, ${house.location.address.postal_code}</p>
                <a href="https://www.realtor.com/realestateandhomes-detail/${house.permalink}" class="btn btn-primary tag">Check The Listing</a>
                
                </div>
        </div>    
              `     
  }
     )
    console.log(homeInfo);
    return homeInfoArr.join("")
    
}



async function getAgents() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b6fd429afdmsh5d6de1aa5a13d26p16a711jsnac8f43c6abfd',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(`https://realty-in-us.p.rapidapi.com/agents/list?postal_code=${zipcode.value}&offset=0&limit=5&sort=recent_activity_high&types=agent`, options);
    const result = await response.json();
    agentInfo = result.agents
    agents.innerHTML = display(agentInfo)
    console.log(agentInfo);



  } catch {
    err=> console.error(err);
  }
}

function display(agentArray){
  let agentInfoArr = agentArray.map(agent => {
      return `
      <div class="card mt-5" style="width: 18rem;">
              <img src="${agent.photo.href}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">Agent Name : ${agent.person_name}</h5>
              <h5 class= "card-title">Agent Rating : ${agent.agent_rating}</h5>
              <h5 class= "card-title">Email: ${agent.email}</h5>
              <p class="card-text"></p>
              <a href="${agent.web_url}" class="btn btn-primary tag">Find Agent</a>
              </div>
      </div>    
            `     
}
   )
  
  return agentInfoArr.join("")

}

  


