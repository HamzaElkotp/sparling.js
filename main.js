function jsonRead(jsonpages, metatagFunc){
    let xhr = fetch(jsonpages);
    xhr.then((res)=>{
        return res.json()
    }).then((data)=>{
        return data
    }).then((data)=>{
        function evenAdder(){
            let elements = document.querySelectorAll('[SPAname]');
            elements.forEach((ele, index)=>{
                ele.addEventListener('click',()=>{
                    document.title = data[index].SPAtitle;
                    window.history.pushState("","",data[index].SPAurl);
                })
            })
        }
        evenAdder(metatagFunc);
    });
}

function metaTags(SPAnameKeyName, urlKeyName, titleKeyName){
    let SPAname = SPAnameKeyName;
    let SPAurl = urlKeyName;
    let SPAtitle = titleKeyName;
}

jsonRead("spa.json",metaTags("SPAname", "SPAurl", "SPAtitle"));