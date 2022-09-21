function jsonRead(jsonpages, metatagArr){
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

                    // change title, url   regardless of pages or json file objects order
                    data.forEach((item, dataI)=>{
                        if(data[dataI][SPAname] == ele.getAttribute("SPAname")){
                            document.title = data[dataI][SPAtitle];
                            window.history.pushState("","",data[dataI][SPAurl]);
                        }
                    })

                    
                })
            })
        }
        evenAdder();
    });
}

jsonRead("spa.json",["SPAnameR", "SPAurlR", "SPAtitleR"]);





