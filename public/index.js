button=document.querySelector("button.submit");
main=document.querySelector("main")
button.addEventListener("click",e=>{
    inp1=document.querySelector(".inp1");
    inp2=document.querySelector(".inp2");
    inp3=document.querySelector(".inp3");
    inp4=document.querySelector(".inp4");



    
    // async function f1(){
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': 'bca7676c66msh0f73a32ec01f9c5p10537ejsnd9c868b70a70',
    //                 'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
    //             }
    //         }
    //         d1=await fetch(`https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${inp1}%2C%20${inp2}&home_type=${inp3}`, options);
    //         d1b=await d1.json();
    //         console.log(d1b.props[0].imgSrc);
            
            // img1.setAttribute('src',`${d1b.props[0].imgSrc}`);
            // h5.innerText=`${d1b.props[0].address}`;
            // p1.innerText+=`${dib.props[0].price}`;
            // p2.innerText+=`${d1b.props[0].livingArea}`;
            // p3.innerText+=`h            console.log(error);
    //     }

    // f1();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bca7676c66msh0f73a32ec01f9c5p10537ejsnd9c868b70a70',
            'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
        }
    };
    
    fetch(`https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${inp1.value}%2C%20${inp2.value}&home_type=${inp3.value}`, options)
    // fetch(`https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${inp1.value}&home_type=houses`, options)
        .then(response => response.json())
        .then(response =>{
            console.log(response.props[0]);

            let newdiv1=document.createElement("div");
            newdiv1.setAttribute("class","card");
        
            let img1=document.createElement("img");
            img1.setAttribute("class","card-img-top");
            img1.setAttribute('src',`${response.props[0].imgSrc}`);
        
            let  divc=document.createElement("div");
            divc.setAttribute("class","card-body");
        
            let h5=document.createElement("h5");
            h5.setAttribute("class","card-title");
        
            let p1 = document.createElement("p");
            p1.setAttribute("class","card-text");
            p1.innerText="Price:";
            
            let p2 = document.createElement("p");
            p2.setAttribute("class","card-text");
            p2.innerText="LivingArea:";
            
            let p3 = document.createElement("p");
            p3.setAttribute("class","card-text");
            p3.innerText="Bedrooms:";
        
            let a=document.createElement("a");
            a.setAttribute("class","btn btn-primary");
            a.setAttribute("href","#");
            a.innerText="Go Details"
        
            newdiv1.appendChild(img1);
            newdiv1.appendChild(divc);
            divc.appendChild(h5);
            divc.appendChild(p1);
            divc.appendChild(p2);
            divc.appendChild(p3);
            divc.appendChild(a);
            main.appendChild(newdiv1);
            
            h5.innerText=`${response.props[0].address}`;
            p1.innerText+=`${response.props[0].price}`;
            p2.innerText+=`${response.props[0].livingArea}`;
            p3.innerText+=`${response.props[0].bedrooms}`;
            
        })
        .catch(err => console.error(err));



})