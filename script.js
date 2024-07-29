// script.js

// Function to handle the search functionality
document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let query = e.target.value;
        alert('Searching for: ' + query);
        // Implement search functionality here
    }
});

// Function to handle the traceability feature
function traceFood() {
    let productCode = document.getElementById('product-code').value;
    let traceResult = document.getElementById('trace-result');

    // Dummy data for demonstration purposes
    let traceData = {
        "12345": {
            farm: "Sunny Fields",
            harvestDate: "June 12, 2024",
            processingPlant: "Fresh Farms Co.",
            store: "Local Market"
        },
        "67890": {
            farm: "Green Acres",
            harvestDate: "July 20, 2024",
            processingPlant: "Healthy Harvest Inc.",
            store: "Supermart"
        }
    };

    if (traceData[productCode]) {
        let data = traceData[productCode];
        traceResult.innerHTML = `
            <p>Farm: ${data.farm}</p>
            <p>Harvest Date: ${data.harvestDate}</p>
            <p>Processing Plant: ${data.processingPlant}</p>
            <p>Store: ${data.store}</p>
        `;
    } else {
        traceResult.innerHTML = `<p>Product code not found. Please try again.</p>`;
    }
}

// Example trace button to demonstrate functionality
document.querySelector('#traceability .example-trace button').addEventListener('click', function() {
    document.getElementById('product-code').value = '12345';
    traceFood();
});

// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
