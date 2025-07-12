// document.querySelector('button').addEventListener('click', () => {
//     const input = document.getElementById('location').value;
//     function updateTemp(data) {
//     const element =  document.getElementById('weatherInfo');
//     element.innerHTML = `Today's temperature: ${data.current.temp_c}°C`;
//     }


//     const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=f204c9ff6f4b46b29bd155857252806&q=${place}&aqi=no`)
//        prom
//          .then(response=>response.json())
//          .then(data=> updateTemp(data));
// })


 document.querySelector('button').addEventListener('click', () => {
      const input = document.getElementById('location').value;

      function updateTemp(data) {
        const element = document.getElementById('weatherInfo');
        element.innerHTML = `Today's temperature: ${data.current.temp_c}°C`;
      }

      fetch(`https://api.weatherapi.com/v1/current.json?key=f204c9ff6f4b46b29bd155857252806&q=${input}&aqi=no`)
        .then(response => response.json())
        .then(data => updateTemp(data))
        .catch(error => {
          document.getElementById('weatherInfo').innerText = "Could not fetch weather. Please check the location.";
          console.error(error);
        });
    });