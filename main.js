function jsonRead(jsonpages, metatagArr){
    let xhr = fetch(jsonpages);
    xhr.then((res)=>{
        return res.json()
    }).then((data)=>{
        return data
    }).then((data)=>{
        function evenAdder(){

            let SPAname = metatagArr[0];
            let SPAurl = metatagArr[1];
            let SPAtitle = metatagArr[2];

            let elements = document.querySelectorAll('[SPAname]');
            elements.forEach((ele, index)=>{
                ele.addEventListener('click',()=>{
                    document.title = data[index][SPAtitle];
                    window.history.pushState("","",data[index][SPAurl]);
                })
            })
        }
        evenAdder();
    });
}

jsonRead("spa.json",["SPAnameR", "SPAurlR", "SPAtitleR"]);





