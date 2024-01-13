

var canSearch = true;

// Assume data is an array of objects read from your CSV file
const data = [
    { flight: 'MAC468Y', company: 'Air Arabia', source: 'BOLOGNA', destination: 'CASABLANCA', photo: 'Cards/CardTemplate_Data-Set-1.png' },
    { flight: 'BTI6WU', company: 'Air Baltic', source: 'VILNIUS', destination: 'TENERIFE', photo: 'Cards/CardTemplate_Data-Set-2.png' },
    { flight: 'BTI8KA', company: 'Air Baltic (Latvian Flag Livery)', source: 'RIGA', destination: 'MALAGA', photo: 'Cards/CardTemplate_Data-Set-3.png' },
    { flight: 'AEA4065', company: 'Air Europa', source: 'MADRID', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-4.png' },
    { flight: 'AFR11DN', company: 'Air France', source: 'PARIS', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-5.png' },
    { flight: 'AFR11DN', company: 'Air France (Air France Hop)', source: 'PARIS', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-6.png' },
    { flight: 'SZN424', company: 'Air Senegal', source: 'BARCELONA', destination: 'DAKAR', photo: 'Cards/CardTemplate_Data-Set-7.png' },
    { flight: 'ASL55B', company: 'AirSERBIA', source: 'BELGRADE', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-8.png' },
    { flight: 'TAY5LC', company: 'ASL Airlines', source: 'BARCELONA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-9.png' },
    { flight: 'TAY5LC', company: 'ASL Airlines Belgium (FedEx)', source: 'PARIS', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-10.png' },
    { flight: 'AUAC4X', company: 'Austrian Airlines', source: 'VIENNA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-11.png' },
    { flight: 'AVA019', company: 'Avianca', source: 'BARCELONA', destination: 'BOGOTA', photo: 'Cards/CardTemplate_Data-Set-12.png' },
    { flight: 'BAW29HG', company: 'British Airways', source: 'LONDON', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-13.png' },
    { flight: 'BEL3TV', company: 'Brussels Airlines (Star Alliance Livery)', source: 'BRUSSELS', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-14.png' },
    { flight: 'BEL8SR', company: 'Brussels Airlines (Tomorrowland Livery)', source: 'BRUSSELS', destination: 'ALICANTE', photo: 'Cards/CardTemplate_Data-Set-15.png' },
    { flight: 'SN3751', company: 'Brussels Airlines', source: 'BRUSSELS', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-16.png' },
    { flight: 'BEL3TV', company: 'Brussels Airlines', source: 'BRUSSELS', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-17.png' },
    { flight: 'BEL3TV', company: 'Brussels Airlines (The Smurfs Livery)', source: 'BRUSSELS', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-18.png' },
    { flight: 'RYR9881', company: 'Buzz', source: 'WARSAW', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-19.png' },
    { flight: 'VCG1EZ', company: 'Catreus', source: 'CHESTER', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-20.png' },
    { flight: 'CFG508', company: 'Condor', source: 'HAMBURG', destination: 'AGADIR', photo: 'Cards/CardTemplate_Data-Set-21.png' },
    { flight: 'JOC267', company: 'Dan Air', source: 'BACAU', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-22.png' },
    { flight: 'UNKNOWN', company: 'Dassault Aviation F-HVYO', source: 'UNKNOWN', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-23.png' },
    { flight: 'EZY62GR', company: 'EasyJet', source: 'LONDON', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-24.png' },
    { flight: 'GL5T', company: 'ECODU', source: 'FRANKFURT', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-25.png' },
    { flight: 'MSR753', company: 'Egyptair', source: 'CAIRO', destination: 'MADRID', photo: 'Cards/CardTemplate_Data-Set-26.png' },
    { flight: 'UAE9906', company: 'Emirate SkyCargo', source: 'DUBAI', destination: 'MADRID', photo: 'Cards/CardTemplate_Data-Set-27.png' },
    { flight: 'UAE7AM', company: 'Emirates', source: 'DUBAI', destination: 'MADRID', photo: 'Cards/CardTemplate_Data-Set-28.png' },
    { flight: 'ENT58EY', company: 'Ente Air', source: 'WARSAW', destination: 'LANZAROTE', photo: 'Cards/CardTemplate_Data-Set-29.png' },
    { flight: 'EWG15AC', company: 'Eurowings', source: 'STUTTGART', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-30.png' },
    { flight: 'ECA2UN', company: 'Excellent Air', source: 'LONDON', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-31.png' },
    { flight: 'LXJ651', company: 'Flexjet', source: 'LOS ANGELES', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-32.png' },
    { flight: 'SWR584H', company: 'Helvetic Airways', source: 'ZURICH', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-33.png' },
    { flight: 'IB8372', company: 'Iberia Regional', source: 'BARCELONA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-34.png' },
    { flight: 'IB8876', company: 'Iberia Regional', source: 'MADRID', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-35.png' },
    { flight: 'MDM133', company: 'Iberia Regional', source: 'ALMERIA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-36.png' },
    { flight: 'ANE51QV', company: 'Iberia Regional', source: 'PALMA DE MALLORCA', destination: 'ALICANTE', photo: 'Cards/CardTemplate_Data-Set-37.png' },
    { flight: 'YW3049', company: 'Iberia Regional (Reserva La Rioja Livery)', source: 'MADRID', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-38.png' },
    { flight: 'ANE76EQ', company: 'Iberia Regional (100 millones de pasajeros)', source: 'MALAGA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-39.png' },
    { flight: 'ANE8872', company: 'Iberia Regional (Islas Cies Livery)', source: 'MADRID', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-40.png' },
    { flight: 'EXS1215', company: 'Jet2', source: 'BIRMINGHAM', destination: 'ALICANTE', photo: 'Cards/CardTemplate_Data-Set-41.png' },
    { flight: 'EXS6H', company: 'Jet2', source: 'LEEDS', destination: 'ALICANTE', photo: 'Cards/CardTemplate_Data-Set-42.png' },
    { flight: 'JSG139', company: 'JetStream', source: 'MILAN', destination: 'MALAGA', photo: 'Cards/CardTemplate_Data-Set-43.png' },
    { flight: 'KLM39H', company: 'KLM', source: 'AMSTERDAM', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-44.png' },
    { flight: 'KLM39H', company: 'KLM (1700th E-Jet Sticker)', source: 'AMSTERDAM', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-45.png' },
    { flight: 'KAC133', company: 'Kuwait Airways', source: 'KUWAIT CITY', destination: 'MADRID', photo: 'Cards/CardTemplate_Data-Set-46.png' },
    { flight: 'RYR488M', company: 'Lauda Europe', source: 'VIENNA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-47.png' },
    { flight: 'LOT6239', company: 'LOT', source: 'WARSAW', destination: 'SALVADOR', photo: 'Cards/CardTemplate_Data-Set-48.png' },
    { flight: 'DLH1842', company: 'Lufthansa (Star Alliance Livery)', source: 'MUNICH', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-49.png' },
    { flight: 'DLH44U', company: 'Lufthansa', source: 'FRANKFURT', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-50.png' },
    { flight: 'DLH99Y', company: 'Lufthansa (Die Maus Sticker)', source: 'FRANKFURT', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-51.png' },
    { flight: 'DLH99Y', company: 'Lufthansa (600th Airbus Aircraft Livery)', source: 'FRANKFURT', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-52.png' },
    { flight: 'LNX05AL', company: 'Luxaviation UK', source: 'MADRID', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-53.png' },
    { flight: 'LWG10C', company: 'Luxwing', source: 'PISA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-54.png' },
    { flight: 'RYR66UL', company: 'Malta Air', source: 'KIRCHBERG', destination: 'ALICANTE', photo: 'Cards/CardTemplate_Data-Set-55.png' },
    { flight: 'MHV64M', company: 'MHS Aviation', source: 'PALMA DE MALLORCA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-56.png' },
    { flight: 'NJE419W', company: 'Netjets Europe', source: 'PALMA DE MALLORCA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-57.png' },
    { flight: 'NOZ9CQ', company: 'Norwegian Air Shuttle', source: 'OSLO', destination: 'ALICANTE', photo: 'Cards/CardTemplate_Data-Set-58.png' },
    { flight: 'QR8836', company: 'Qatar Airways', source: 'DOHA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-59.png' },
    { flight: 'QTR80547', company: 'Qatar Cargo', source: 'DOHA', destination: 'MADRID', photo: 'Cards/CardTemplate_Data-Set-60.png' },
    { flight: 'RAM968C', company: 'Royal Air Maroc Express', source: 'CASABLANCA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-61.png' },
    { flight: 'RYR616', company: 'Ryanair', source: 'IBIZA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-62.png' },
    { flight: 'SAS2813', company: 'SAS', source: 'COPENHAGEN', destination: 'ALICANTE', photo: 'Cards/CardTemplate_Data-Set-63.png' },
    { flight: 'SWR4GT', company: 'Swiss', source: 'ZURICH', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-64.png' },
    { flight: 'SWR584H', company: 'Swiss', source: 'ZURICH', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-65.png' },
    { flight: 'SWR584H', company: 'Swiss (Star Alliance Livery)', source: 'ZURICH', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-66.png' },
    { flight: 'TAP94PT', company: 'Tap Express', source: 'LISBON', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-67.png' },
    { flight: 'TAP1092', company: 'Tap Express', source: 'LISBON', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-68.png' },
    { flight: 'TVF16VV', company: 'Transavia', source: 'PARIS', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-69.png' },
    { flight: 'TUI7PH', company: 'TUI (Cewe Fotobuch Livery)', source: 'FRANKFURT', destination: 'TENERIFE', photo: 'Cards/CardTemplate_Data-Set-70.png' },
    { flight: 'THY6TA', company: 'Turkish Airlines', source: 'ISTAMBUL', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-71.png' },
    { flight: 'THY6TA (Bio Fuel Livery)', company: 'Turkish Airlines', source: 'ISTAMBUL', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-72.png' },
    { flight: 'C68A', company: 'Unknown', source: 'UNKNOWN', destination: 'UNKNOWN', photo: 'Cards/CardTemplate_Data-Set-73.png' },
    { flight: 'N252C', company: 'Unknown', source: 'BONN', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-74.png' },
    { flight: 'VJH373', company: 'Vistajet', source: 'ZARAGOZA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-75.png' },
    { flight: 'VOE35UU', company: 'Volotea', source: 'ASTURIAS', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-76.png' },
    { flight: 'VOE35XX (10 Years Livery)', company: 'Volotea', source: 'BILBAO', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-77.png' },
    { flight: 'VLG60QU', company: 'Vueling', source: 'TENERIFE', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-78.png' },
    { flight: 'VLG8WT', company: 'Vueling', source: 'PARIS', destination: 'ALICANTE', photo: 'Cards/CardTemplate_Data-Set-79.png' },
    { flight: 'VLG6ZT (Love Barcelona Livery)', company: 'Vueling', source: 'AMSTERDAM', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-80.png' },
    { flight: 'VLG3956', company: 'Vueling', source: 'PALMA DE MALLORCA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-81.png' },
    { flight: 'WWT1MG', company: 'Wizz Air', source: 'TIMISOARA', destination: 'VALENCIA', photo: 'Cards/CardTemplate_Data-Set-82.png' },  
      

];



// You can access the dataSubset array in your code

function searchByCompany() {
    const query = document.getElementById('search').value.toLowerCase();
    const results = data.filter(entry => entry.company.toLowerCase().includes(query));
    return results;
}

function searchByFlight() {
    const query = document.getElementById('search').value.toLowerCase();
    const results = data.filter(entry => (entry.flight && entry.flight.toString().toLowerCase().includes(query)));
    
    
    
    return results;
}



function search() {


    const companyResults = searchByCompany();
    const flightResults = searchByFlight();
    
    // Combine results from both searches
    const combinedResults = [...companyResults, ...flightResults];
    
    
    displayResults(combinedResults);
    


}



function displayResults(results) {
    const resultsList = document.getElementById('searchResults');
    const og_div = document.getElementById('planes_div');
    
    const existingTotalPlanesDiv = document.querySelector('.row');
    
    // Remove existing elements
    resultsList.innerHTML = '';
    if (existingTotalPlanesDiv) {
        existingTotalPlanesDiv.remove();
    }
    
    // Create a new div with class 'row' for total planes
    const newTotalPlanesDiv = document.createElement('div');
    newTotalPlanesDiv.className = 'row';
    
  
    // Create a Set to store unique photo numbers
    const uniquePhotoNumbers = new Set();
    
    results.forEach(result => {
        // Find all matching entries in the predefined data
        const matchingEntries = data.filter(entry => entry.company === result.company || entry.flight === result.flight);
        
        matchingEntries.forEach(entry => {
            // Extract the photo number from the entry
            const photoNumber = entry.photo.match(/\d+/)[0];
            
            // Add unique photo numbers to the Set
            uniquePhotoNumbers.add(photoNumber);
        });
    });


    
    
    // Create divs for each unique photo number and display the images
    uniquePhotoNumbers.forEach(photoNumber => {
        
        const img = document.createElement('img');
        img.className = 'plane_img';
        
        // Extract the photo number from the first entry (just for logging purposes)
        const firstEntryPhotoNumber = data.find(entry => entry.company === results[0].company || entry.flight === results[0].flight).photo.match(/\d+/)[0];
        
        // Log the photo numbers for debugging
        
        img.src = `Cards/CardTemplate_Data-Set-${photoNumber}.png`;
        img.alt = `Image ${photoNumber}`;
        newTotalPlanesDiv.appendChild(img);
    });
    
    // Clear the Set for the next search
    uniquePhotoNumbers.clear();
    
    // Append the 'row' div to the results list
    og_div.appendChild(newTotalPlanesDiv);

    


}









