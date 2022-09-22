let contentBox = document.getElementById("SPAoutContent");

function intContent(jsonpages, metatagArr = ["SPAname", "SPAurl", "SPAtitle"]){

    let xhr = fetch(jsonpages);
    xhr.then((res)=>{
        return res.json()
    }).then((data)=>{
        return data
    }).then((data)=>{
        function evenAdder(){

            // to make No need to stick to static "page title" like: "SPAtitle", "page url" like: "SPAurl" or "page name" like: "SPAname", in your json file, name them as you want but be carefull to their order
            let SPAname = metatagArr[0];
            let SPAurl = metatagArr[1];
            let SPAtitle = metatagArr[2];

            let elements = document.querySelectorAll('[SPAname]');

            // Loop through "SPAname" meta tag elemnts to add to them 'click' event
            elements.forEach((ele, index)=>{
                ele.addEventListener('click',()=>{

                    let eleIndex = ""

                    // change title, url   regardless of pages or json file objects order
                    for(let dataI = 0; dataI<data.length ; dataI++){
                        if(data[dataI][SPAname] == ele.getAttribute("SPAname")){
                            document.title = data[dataI][SPAtitle];
                            window.history.pushState("","",data[dataI][SPAurl]);
                            eleIndex = dataI;
                            break
                        }
                    }


                    contentBox.innerHTML = ``;

                    for (i in data[eleIndex]["Body"]){
                        contentBox.innerHTML += `${data[eleIndex]["Body"][i]}`
                    }

                    elements.forEach((eles)=>{
                        eles.classList.remove("is-active", "is-primary");
                    })
                    
                    ele.classList.add("is-active", "is-primary")
                })
            })
        }
        evenAdder();
    });
}

function intHomeContent (jsonpages, homePageSPAname, keyName){
    let xhr = fetch(jsonpages);
    xhr.then((res)=>{
        return res.json()
    }).then((data)=>{
        return data
    }).then((data)=>{
        for(let ind = 0; ind<data.length; ind++){
            if(data[ind][keyName] == homePageSPAname){
                for (item in data[ind]["Body"]){
                    contentBox.innerHTML += `${data[ind]["Body"][item]}`;
                }
                break;
            }
        }
    })
}

intContent("spa.json",["SPAname1", "SPAurl1", "SPAtitle1"],true);
intHomeContent("spa.json","home","SPAname1");