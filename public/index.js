import { get8cards, refreshcards } from "./tools.js";

let button=document.querySelector("button.submit");
let main=document.querySelector("main");


button.addEventListener("click",e=>{//add event to the "Search" button
    let inp1=document.querySelector(".inp1");
    let inp2=document.querySelector(".inp2");
    let inp3=document.querySelector(".inp3");
    let inp4=document.querySelector(".inp4");//get the value of the 4 inputs
    

    let clear=document.createElement("button");//setting the clear-all button;
    clear.setAttribute("class","clearall");
    clear.innerHTML='<i class="fas fa-trash">ClearAll</i>';
    let divclear=document.querySelector("div.clearcontainer");
    divclear.appendChild(clear);
    clear.addEventListener("click",e=>{
        let divcard=document.querySelectorAll("div.card");
        divcard.forEach(element=>{
            element.remove();
        })
        refresh.remove();
    })

    let refresh=document.createElement("button");//setting the "refresh and load more" button;
    refresh.setAttribute("class","refresh");
    refresh.innerHTML='&#10227';
    divclear.appendChild(refresh);


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bca7676c66msh0f73a32ec01f9c5p10537ejsnd9c868b70a70',
            'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
        }
    };
    
    // fetch(`https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${inp1.value}%2C%20${inp2.value}%2C${inp3.value}&home_type=${inp4.value}`, options)
            // .then(response => response.json())
            // .then(response =>{
            //     console.log(response.props[0]);
            //     {length,a,h5,p1,p2,p3}= get8cards();
            //     refreshcards();
            //     })
            // })
            // .catch(err => console.error(err));
   
    
    $.getJSON("./testdata.json", function(response) {
                console.log(response.props[0])
                console.log('---------000000000')
                let l=get8cards(response,main);
                console.log(l);
                refreshcards(response,l);             
            });
            
    
})

