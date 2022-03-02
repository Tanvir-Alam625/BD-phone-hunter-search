// ========================
//  get api link function 
// ========================
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
    getLoadPhone(data.data);
    input.value= "";
    
    }
}
//====================
// data load function 
//====================
const getLoadPhone = (phones)=>{
    const container = document.getElementById('result-phone');
    const ErrorMessage = document.getElementById('error-message');
    const detailsContainer = document.getElementById('details');
    document.getElementById('loader-container').style.display = 'none';
    ErrorMessage.innerText = "";
    detailsContainer.textContent = "";
    if(phones.length == 0){
        console.log('null');
        ErrorMessage.innerText = "No phones items";
        document.getElementById('product').innerText = "";
    }
    container.innerHTML = "";
    document.getElementById('product').innerText = "Products";
    phones?.forEach(phone => {
            const div = document.createElement('div');
            div.className = 'p-2 m-4 rounded border';
            div.innerHTML = `
                        <div class="img-div  mb-4 flex justify-center ">
                            <img src="${phone.image}" width="70%" class="rounded" alt="player">
                        </div>
                        <h3 class="text-2xl mb-2">${phone.phone_name}</h3>
                        <h4 class="text-1xl mb-3">${phone.brand}</h4>
                        <a href="#details"
                        <button onclick="getDetails('${phone.slug}')" class="py-2 mb-2 px-4 rounded border bg-green-500 text-white">Details</button>
                        </a>

            `;
            container.appendChild(div);
    }); 
}
//======================
// details api  function 
//======================
const getDetails = async (detail)=>{
    console.log(detail);
    document.getElementById('loader-container').style.display = 'block';
    const url = `https://openapi.programming-hero.com/api/phone/${detail}`;
    console.log(url);
    const data = await fetch(url)
    const response = await data.json();
    detailsSetData(response.data);
}
//==================
// details set value 
//==================
const detailsSetData = (details) =>{
    const detailsContainer = document.getElementById('details');
    const div = document.createElement('div');
    document.getElementById('loader-container').style.display = 'none';
    detailsContainer.textContent = "";
    div.innerHTML = `
                <div class="detail p-2 my-3  border  font-light rounded">
                    <div class="details-img flex items-center flex-col my-4 ">
                        <img src="${details.image}" class = "mb-4" width="200px" alt="img">
                        <h2 class= "text-2xl">${details.name}</h2>
                        <h4  class="text-1xl">${details.releaseDate? details.releaseDate: ' '}</h4>
                    </div>
                    <div class="date grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2>Brand:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.brand? details.brand: '❌'}</h2>
                        </div>
                    </div>
                    <div class="storage grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >Storage:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2>${details.mainFeatures.storage? details.mainFeatures.storage: '❌' }</h2>
                        </div>
                    </div>
                    <div class="display grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >Display-Size</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.mainFeatures.displaySize? details.mainFeatures.displaySize: '❌'}</h2>
                        </div>
                    </div>
                    <div class="chip-set grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >Chip-set:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.mainFeatures.chipSet? details.mainFeatures.chipSet: '❌'}</h2>
                        </div>
                    </div>
                    <div class="memory grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >Memory:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.mainFeatures.memory ? details.mainFeatures.memory: '❌'}</h2>
                        </div>
                    </div>
                    <div class="sensors grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >Sensors:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.mainFeatures.sensors? details.mainFeatures.sensors.join(", "): '❌'}</h2>
                        </div>
                    </div>
                    <div class="sensors grid grid-cols-1 w-[100%] border-t">
                            <h2 class="text-1xl text-center" >Others</h2>
                    </div>
                    <div class="WLAN grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >WLAN:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.others.WLAN? details.others.WLAN: '❌'}</h2>
                        </div>
                    </div>
                    <div class="bluetooth grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >Bluetooth:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.others.Bluetooth? details.others.Bluetooth: '❌'}</h2>
                        </div>
                    </div>
                    <div class="GPS grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >GPS:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.others.GPS? details.others.GPS: '❌'}</h2>
                        </div>
                    </div>
                    <div class="NFC grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >NFC:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.others.NFC? details.others.NFC: '❌'}</h2>
                        </div>
                    </div>
                    <div class="Radio grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >Radio:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.others.Radio ? details.others.Radio: '❌'}</h2>
                        </div>
                    </div>
                    <div class="USB grid grid-cols-2 w-[100%] border-t">
                        <div class="w-[30%] p-2 ">
                            <h2 >USB:</h2>
                        </div>
                        <div class="w-[70%] p-2 border-l">
                            <h2 >${details.others.USB? details.others.USB: '❌'}</h2>
                        </div>
                    </div>
                </div>`;
    detailsContainer.appendChild(div);
}