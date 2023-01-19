const key = 'a9fcb2b4053a40a0fd7c6d54ec1d3721';

const getWeather=async(city)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log("==================");
    console.log(data);
    if(data.cod != '200'){
        alert("Enter valid city name.");
    }
    else{

    }


}
let  button = document.getElementById('btn');
button.addEventListener('click',()=>{
    const input = document.getElementById('val');
    getWeather(input.value);
})

const displayContent=(data)=>{
    document.getElementById('icon').innerHTML=`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    document.getElementById('tempmacval').innerHTML=`<h2> ${data.main.temp_max} <sub>o</sub></h2>`;
}
