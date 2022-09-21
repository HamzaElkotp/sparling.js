
function jsonRead(jsonpages, event){
    let xhr = fetch(jsonpages);
    xhr.then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        return data
    }).then((data)=>{
        event
    })
    
}
jsonRead("spa.json",eventAdder("SPAname", "SPAurl", "SPAtitle"));


function eventAdder(SPAnameKeyName, urlKeyName, titleKeyName){
    let SPAname = SPAnameKeyName;
    let SPAurl = urlKeyName;
    let SPAtitle = titleKeyName;
    let elements = document.querySelectorAll('[SPAname]')
    elements.forEach((ele)=>{
        ele.addEventListener('click',()=>{
            // document.title = data
        })
    })
}


































