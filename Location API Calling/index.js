
const locationButton = document.getElementById("searchButton");

function gotLocation(position) {
    console.log("Got Location", position);
}

function notLocation(error) {
    console.error("Error getting location:", error.message);
}

locationButton.addEventListener("click", async () => {
        navigator.geolocation.getCurrentPosition(gotLocation, notLocation); 
});
