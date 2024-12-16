const apiKey = 'b0392276c35e355284b61d566bd033c3';
let weatherData = {};  //To store all the data from the API
let limit = 5;   //Initial number of cards to be shown

const options = {method: 'GET', headers: {accept: 'application/json'}};

//Fetch the crowdfunding data from the API :
function fetchData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`, options)
    .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);  // Handle non-200 status codes
        }
        return res.json();  // Parse JSON if the response is okay
    }).then(res => console.log(res))
    .then(data => {
                    weatherData = data;    // Store weather data
                    console.log(weatherData);    // Log the data to check structure
                    renderCards();
    }).catch(error => console.log('Error fetching data: ', error));
}

//Render the limited number of cards :
function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';    //Clear previous cards (if any)
    //const projectsToShow = allProjects.slice(0, limit);  //Show only the first 'limit' no. of cards
    //projectsToShow.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');  //Add a class for styling
        card.innerHTML = `
            <h3>${weatherData.name}</h3>
            <p>Location: ${weatherData.coord.lon}, ${weatherData.coord.lat}</p>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Weather: ${weatherData.weather[0].description} </p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
            `;
        container.appendChild(card); //Append the card to the container
    //});
}

//Function to load more cards :
function loadMoreCards() {
    limit += 5;   //Increase the limit (5 more cards)
    renderCards();   //Re-enter the cards with the new limit
}

//Event Listener for the "Load More" button :
document.getElementById('load-more').addEventListener('click', loadMoreCards); 

//Fetch data when the page loads :
window.onload = fetchData;




//https://api.indiegogo.com/:v1/campaigns.json?api_token=4e1227ec5333616a3b5775219b3fe5fe580ca9d5676dd8e3c0ac83d1cc69e3a4