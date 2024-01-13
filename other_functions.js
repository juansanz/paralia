const delay = ms => new Promise(res => setTimeout(res, ms));

const flights_companies = ['AEA4065', 'BEL8SR', 'ECA2UN', 'ANE51QV' , 'KLM39H', 'DLH99Y',  'RYR616',
'MAC468Y', 'AFR11DN', 'TAY5LC', 'EWG15AC' , 'EXS1215', 'QTR80547',  'THY6TA',

'Ryanair', 'Vueling'
, 'Lufthansa', 'Volotea', 'Iberia Regional', 'Transavia', 'Air France', 'Flexjet', 'British Airways',

'Merry Christmas' , 'Merry Xmas', 'Feliz Navidad', 'Joyeux Noël', 'Buon Natale', 'Mutlu Noeller', 'С Рождеством',
'Merry Christmas' , 'Merry Xmas', 'Feliz Navidad', 'Joyeux Noël', 'Buon Natale', 'Mutlu Noeller', 'С Рождеством',
'Merry Christmas' , 'Merry Xmas', 'Feliz Navidad', 'Joyeux Noël', 'Buon Natale', 'Mutlu Noeller', 'С Рождеством',
'Merry Christmas' , 'Merry Xmas', 'Feliz Navidad', 'Joyeux Noël', 'Buon Natale', 'Mutlu Noeller', 'С Рождеством']

let i = 0;




const placeholder_opt = async () => {
    while(true){
        var chosen_option = Math.floor(Math.random() * flights_companies.length);
        let flight_num = flights_companies[chosen_option];
        for (var a = 0; a < flight_num.length; a++){
            
            document.getElementsByClassName('input_field')[0].placeholder += flight_num[a];
            await delay(50);
            
        }

        await delay(3000);

        for(var e = 0; e < flight_num.length; e++){

            flight_num = flight_num.split('');
            flight_num.splice(flight_num.length - e, 1 , ' ');
            flight_num = flight_num.join('');
            document.getElementsByClassName('input_field')[0].placeholder = flight_num;
            await delay(30);
        }
        document.getElementsByClassName('input_field')[0].placeholder = "";
        await delay(200);

        
}




};
placeholder_opt();



  function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");
    const openBtn = document.getElementById("openBtn");
    const screenWidth = window.innerWidth;

    if(screenWidth >= 360 && screenWidth <= 700){
        if (sidebar.style.width === "30%") {
            sidebar.style.width = "0";
            openBtn.style.marginRight = "0";
            openBtn.innerHTML = "☰";
    
        } else {
            sidebar.style.width = "30%";
            openBtn.style.marginRight = "30%";
            openBtn.innerHTML = "X";
        }

    }
    if(screenWidth >= 700 && screenWidth <= 1000){
        if (sidebar.style.width === "30%") {
            sidebar.style.width = "0";
            openBtn.style.marginRight = "0";
            openBtn.innerHTML = "☰";
    
        } else {
            sidebar.style.width = "30%";
            openBtn.style.marginRight = "30%";
            openBtn.innerHTML = "X";
        }

    }

    if(screenWidth >= 1000 && screenWidth <= 1500){
        if (sidebar.style.width === "15%") {
            sidebar.style.width = "0";
            openBtn.style.marginRight = "0";
            openBtn.innerHTML = "☰";
    
        } else {
            sidebar.style.width = "15%";
            openBtn.style.marginRight = "15%";
            openBtn.innerHTML = "X";
        }

    }

    else if (screenWidth > 1500){
     
            if (sidebar.style.width === "10%") {
                sidebar.style.width = "0";
                openBtn.style.marginRight = "0";
                openBtn.innerHTML = "☰";
        
            } else {
                sidebar.style.width = "10%";
                openBtn.style.marginRight = "10%";
                openBtn.innerHTML = "X";
            }
    
        
    }
   

}



    // Generate imageUrls array with the photo route template without leading zeros
    const imageUrls = Array.from({ length: 75 }, (_, index) => `Cards/CardTemplate_Data-Set-${index + 1}.png`);
const container = document.querySelector('.row');

// Rest of the code remains the same
const batchSize = 9; // Number of images to load at a time
let currentIndex = 0;



// Function to load a batch of images
function loadImages(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < imageUrls.length; i++) {
              const imgElement = document.createElement('img');
      imgElement.src = imageUrls[i];
      imgElement.alt = `Image of the airline ${data[i].company}`;
      imgElement.className = 'plane_img';
      container.appendChild(imgElement);
    }
  }
  
  // Initial load
  loadImages(currentIndex, currentIndex + batchSize);

// Function to load more images every 2 seconds
const intervalId = setInterval(function () {
  currentIndex += batchSize;
  loadImages(currentIndex, currentIndex + batchSize);

  // Stop loading more images when all images are loaded
  if (currentIndex >= imageUrls.length) {
    clearInterval(intervalId);
}
}, 2000);



var query = document.getElementById("search");
var img_url = "Cards/CardTemplate_Data-Set-34.png";
const photo_cont = document.querySelector('.row');


function checkInput() {

    if (query.value === "paper plane" || query.value === "Paper Plane") {
        canSearch = false;
        console.log(canSearch);
        console.log("Match found!");
        const imgElement = document.createElement('img');
        imgElement.src = img_url;
        imgElement.alt = `Image of the airline Paper Plane`;
        imgElement.className = 'plane_img';
        photo_cont.appendChild(imgElement);
  
}

}




