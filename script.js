
async function getData() {
    
    const val1 = document.getElementById("my-input");
    const val2 = document.querySelector(".content");

    
    const city = val1.value
    
    const res = await fetch(`https://api.weatherstack.com/current?access_key=958329ac3b590f9a29bb3cbb4b4195ec&query=${city}`);
    const data = await res.json()
    console.log(data);

    const icon = data.current.weather_icons[0];
    const cityName = data.location.name;
    const temperature = data.current.temperature;
    const humidity = data.current.humidity;
    const description = data.current.weather_descriptions[0];
    
    const iconI = document.createElement("img");
    iconI.src = icon;
    const cityP = document.createElement("p");
    cityP.innerText = `City Name : ${cityName}`;
    const temP = document.createElement("p");
    temP.innerText = `Temperature : ${temperature} °C`;
    const humP = document.createElement("p");
    humP.innerText = `Humidity : ${humidity} %`;
    const desP = document.createElement("p");
    desP.innerText = `Description : ${description}`;
    
    val2.appendChild(iconI);
    val2.appendChild(cityP)
    val2.appendChild(temP);
    val2.appendChild(humP);
    val2.appendChild(desP);
    val1.value = "";
    
    iconI.style.borderRadius = "5px";
    cityP.style.cssText = "font-size:17px; font-family:Poppins, serif; font-weight: bold;"
    temP.style.cssText = "font-size:17px; font-family:Poppins, serif; font-weight: bold;"
    humP.style.cssText = "font-size:17px; font-family:Poppins, serif; font-weight: bold;"
    desP.style.cssText = "font-size:17px; font-family:Poppins, serif; font-weight: bold;"
    
}