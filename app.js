let btn  = document.querySelector('button');
let ul = document.querySelector('ul');

let url = "http://universities.hipolabs.com/search?name=";//+middle

btn.addEventListener('click',async ()=>{
    let value = document.querySelector('input').value;
    let country = [];
    country = await getinfo(value);
    ul.innerText = "";
    for(let c = 0 ;c<country.length;c++){
        let list = document.createElement('li');
        // list.innerHTML = " ";
        list.innerText = country[c];
        ul.appendChild(list);
    }
})

async function getinfo(country){
    try{
        
        let val = await axios.get(url+country);
        let arr_country = [];
        let info = (val.data);
        info.forEach((el)=>{
                arr_country.push(el.name);
        })
        return arr_country;

    }catch(err){
        console.log("error is : "+err);
    }
}