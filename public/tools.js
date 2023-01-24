function get8cards(response,main){ //get 8 info cards via search
    for(var i=0;i<8;i++){
        // console.log(response.props[i])
        var newdiv1=document.createElement("div");
        newdiv1.setAttribute("class",`card`);
        newdiv1.setAttribute("id",`${i}`);
            
        var img1=document.createElement("img");
        img1.setAttribute("class",`card-img-top`);
        img1.setAttribute('src',`${response.props[i].imgSrc}`);
        img1.setAttribute("id",`${i}`);
    
        var  divc=document.createElement("div");
        divc.setAttribute("class",`card-body`);
        divc.setAttribute("id",`${i}`);
            
        var h5=document.createElement("h5");
        h5.setAttribute("class",`card-title`);
        h5.setAttribute("id",`${i}`);
            
        var p1 = document.createElement("p");
        p1.setAttribute("class",`card-text p1`);
        p1.setAttribute("id",`${i}`);
                
        var p2 = document.createElement("p");
        p2.setAttribute("class",`card-text p2`);
        p2.setAttribute("id",`${i}`);
                
        var p3 = document.createElement("p");
        p3.setAttribute("class",`card-text p3`);
        p3.setAttribute("id",`${i}`);
            
        var a=document.createElement("a");
        a.setAttribute("class","btn btn-primary tag");
        a.setAttribute("href","#");

        a.innerText="Go Details";
        h5.innerText=`${response.props[i].address}`;
        p1.innerText+="Price:"+`${response.props[i].price} ${response.props[i].currency}`;
        p2.innerText="LivingArea:"+`${response.props[i].livingArea} ${response.props[i].lotAreaUnit}`;
        p3.innerText+="Bedrooms:"+`${response.props[i].bedrooms}`;

        newdiv1.appendChild(img1);
        newdiv1.appendChild(divc);
        divc.appendChild(h5);
        divc.appendChild(p1);
        divc.appendChild(p2);
        divc.appendChild(p3);
        divc.appendChild(a);
        main.appendChild(newdiv1);
        
        let trashButton = document.createElement("button");
        trashButton.classList.add("trash");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';

        divc.appendChild(trashButton);

        trashButton.addEventListener("click",e=>{
            let todo=trashButton.parentElement.parentElement;
            console.log(todo);
            todo.remove();
        })
    }
    
    return i
}

function refreshcards(response,l){
    var refresh=document.querySelector("button.refresh");
    let i=l;
    refresh.addEventListener("click",e=>{
        let j=0;
        let k=i
        for(i;i<k+8;i++){
        let h5=document.querySelector(`h5[id='${j}']`);
        // let p1=document.querySelector(`p[class='p1'&&id=${i}]`);
        // let p2=document.querySelector(`p[class='p2'&&id=${i}]`);
        // let p3=document.querySelector(`p[class='p3'&&id=${i}]`);
        let p=document.querySelectorAll(`p[id='${j}']`);
        let [p1,p2,p3]=p;
        let img1=document.querySelector(`img[id='${j}']`);

        img1.setAttribute('src',`${response.props[i].imgSrc}`);
        h5.innerText=`${response.props[i].address}`;
        p1.innerText="Price:"+`${response.props[i].price} ${response.props[i].currency}`;
        p2.innerText="LivingArea:"+`${response.props[i].livingArea} ${response.props[i].lotAreaUnit}`;
        p3.innerText="Bedrooms:"+`${response.props[i].bedrooms}`;
        j=j+1;
}
})
}

export {get8cards,refreshcards}

