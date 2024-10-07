const sheetId = '1GkJ46gbLhh34ykuXKQ2GtSULoVP27JcPjebmceoOL7I';
const apiKey = 'AIzaSyDAzNZuuX5lps-RT6AkC2hhVhi4cE12qH0';
/*
  WARNING: API Key Usage Notice

  This API key is strictly for fetching data related to events from the designated spreadsheet.
  It is NOT to be used for any other purpose, including unauthorized data requests or
  any service outside the scope of this project.

  Any misuse or attempt to use the API key for purposes other than the defined task
  will result in the immediate termination of access to this page and potential further actions.

  Please handle this key responsibly and in compliance with the project guidelines.

  Thank you.
*/


// Google Sheets API URL (fetch data from columns A to F)
const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Events!A:G?key=${apiKey}`;

// Fetch data from Google Sheets
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);  // Log the entire response to check its structure
    if (data.values) {
      createEventCards(data.values);  // Only proceed if data.values exists
    } else {
      console.error('No values found in the API response');
    }
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to create event cards dynamically
function createEventCards(events) {
  const eventContainer = document.querySelector('.events-container');

  events.forEach((event, index) => {
    if (index < 2) return; // Skip the header row

    // Create a card div for each event
    const card = document.createElement('div');
    card.classList.add('event-card');

    // Creating the event element

    const clubs = event[0]; // To pose logos of the clubs
    const image = document.createElement('img');
    if(clubs==="NJACK"){
      image.src="assets/img/club-pics/NJACK/logo.png";
    }else if(clubs==="Finance Club"){
      image.src="assets/img/club-pics/Finance/Finance Club IITP Logo.png";
    }else if(clubs ==="AP Club"){
      image.src="assets/img/club-pics/Astronomy & Particle Physics Club/APC IIT Patna logo_png.png";
    }else if(clubs==="Quantum Technology Club"){
      image.src="https://media.licdn.com/dms/image/D4D0BAQGGd-vz5b4Uwg/company-logo_200_200/0/1719091844205/quantum_technology_club_logo?e=2147483647&v=beta&t=ursIwehZCJrtwUfSbCCKuD8tLuKTedqE0BTDGVo4Xr4";
    }else if(clubs==="Trading & Investment Cell"){
      image.src="assets/img/club-pics/TIC/TIC.jpg";
    }else if(clubs==="Robocon"){
      image.src="assets/img/club-pics/Roboccon/Roboccon.jpg";
    }else if(clubs==="Tinkerers Lab"){
      image.src="assets/img/club-pics/Tinkerers Lab/logo.png";
    }else if(clubs==="Sparkonics"){
      image.src="assets/img/club-pics/Sparkonics/logo.jpeg";
    }else if(clubs==="RnA"){
      image.src="assets/img/club-pics/RnA Club/RnA.png";
    }else if(clubs==="MaTeS"){
      image.src="assets/img/club-pics/MatES/Mlogo.png";
    }else if(clubs==="ChessX"){
      image.src="assets/img/club-pics/Chessx/ChESSx Logo.jpg";
    }else if(clubs==="E-Cell"){
      image.src="assets/img/club-pics/Ecell/ecell.jpg";
    }else if(clubs==="SCME"){
      image.src="assets/img/club-pics/SCME/logo.jpg";
    }else if(clubs==="MoodBoard"){
      image.src="assets/img/club-pics/MoodBoard/MoodBoard.jpg";
    }else if(clubs==="DWDG"){
      image.src="assets/img/club-pics/DWDG/dwdg.jpg";
    };

    const title = document.createElement('h2');
    title.textContent = event[1] || 'Untitled Event';  // Event title in column B

    const type = document.createElement('p');
    type.textContent = event[2] || 'No Type';  // Event type in column C

    const date = document.createElement('p');
    date.textContent = event[3] || 'No Date';  // Event date in column D

    const timefx = document.createElement('p');
    timefx.textContent = event[4] || 'No Time';  // Event time in column E

    const desc = document.createElement('p');
    desc.textContent = event[5] || 'No Description';  // Event description in column F

    const venue=document.createElement('p');
    venue.textContent = event[6] || 'Venue not decided';  // Event venue in column G

    // Append all elements to the card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(date);
    card.appendChild(timefx);
    card.appendChild(venue);
    card.appendChild(desc);

    // Append the card to the event container
    eventContainer.appendChild(card);
  });
}
