let getWeatherData = async(city)=>{

    let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=40510bf2b7a89d985a45c6ec3cfb5669'
    let weatherObj =   await fetch(weatherAPI)
    let response = weatherObj.json();
    return response

}
async function callWeather(){
   let response = await getWeatherData('kabul')
   try{
    // console.log(response);
    document.getElementById('temp').innerText=response['main']['temp'];
    document.getElementById('weather').innerText=response['weather'][0]['description'];
    document.getElementById('wind').innerText=response['wind']['speed'];
   
}

   catch(err){
   console.log(err)
   }  
    
}




let getWeatherData1 = async(city)=>{

    let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=057664fef916aefaf2779f42a0704c98'
    let weatherObj =   await fetch(weatherAPI)
    let response = weatherObj.json();
    return response

}

async function callWeather1(){
    let response = await getWeatherData1('mariehamn')
    try{
     console.log(response);
     document.getElementById('temp1').innerText=response['main']['temp'];
     document.getElementById('weather1').innerText=response['weather'][0]['description'];
     document.getElementById('wind1').innerText=response['wind']['speed'];
    
 }
 
    catch(err){
    console.log(err)
    }  
     
 }



let getWeatherData2 = async(city)=>{

    let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=057664fef916aefaf2779f42a0704c98'
    let weatherObj =   await fetch(weatherAPI)
    let response = weatherObj.json();
    return response

}

async function callWeather2(){
    let response = await getWeatherData2('tirana')
    try{
     console.log(response);
     document.getElementById('temp2').innerText=response['main']['temp'];
     document.getElementById('weather2').innerText=response['weather'][0]['description'];
     document.getElementById('wind2').innerText=response['wind']['speed'];
    
 }
 
    catch(err){
    console.log(err)
    }  
     
 }





