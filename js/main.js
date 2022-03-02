// ===========================================
//  get api link function 
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
    // console.log(data.data);
    getLoadPhone(data.data);
    input.value= "";
    }
}
const getLoadPhone = (phones)=>{
    console.log(phones);
    document.getElementById('loader-container').style.display = 'none';
    const container = document.getElementById('result-phone');
    const ErrorMessage = document.getElementById('error-message');
    ErrorMessage.innerText = "";
    if(phones.length == 0){
        console.log('null');
        ErrorMessage.innerText = "No Players Items";
    }
    try{
        container.innerHTML = "";
        phones.forEach(phone => {
            console.log(phone);
            const div = document.createElement('div');
            div.className = 'p-2 m-4 rounded border';
            div.innerHTML = `
                        <div class="img-div  mb-4 flex justify-center ">
                            <img src="${phone.image}" width="70%" class="rounded" alt="player">
                        </div>
                        <h3 class="text-2xl mb-2">${phone.phone_name}</h3>
                        <h4 class="text-1xl">${phone.brand}</h4>
                        <button  class="py-2 px-4 rounded border bg-green-500 text-white">Details</button>
            `;
            container.appendChild(div);
    });
    }catch(error){
        // ErrorMessage.innerText = "No Players Items";
        console.log('this null');
    }
}