// ===========================================
// api link function 
// ===========================================

const searchPhone = async ()=>{
    const input = document.getElementById('input-values');
    const emptyV = input.value
    if(emptyV == ""){
        input.style.border = '2px solid red';
    }else{
    input.style.border = '2px solid gray'
    document.getElementById('loader-container').style.display = 'block';
    const url = `https://openapi.programming-hero.com/api/phones?search=${input.value}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    getLoadPhone(data);
    input.value= "";
    }
}
const getLoadPhone = ()=>{

}