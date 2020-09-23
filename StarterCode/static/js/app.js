console.log("this works")

// Getting a reference to the button on the page
var button = d3.select("#filter-btn");

//Show all data in table when page loads 
createTable(data);

//Create function to display data
function createTable (filteredData) {
    //get data
    filteredData = data;

    // get reference from table body
    var tbody = d3.select("tbody"); 
    //clear table body if not fisrt time through
    tbody.html("");
    
    //Date cell
    var enteredDate = d3.select("#datetime").property("value");
    if (enteredDate != ""){
        var filteredData = filteredData.filter(UFOsighting => UFOsighting.datetime === enteredDate);
    }

    //City cell
    var enteredCity = d3.select("#city").property("value");
    if (enteredCity != ""){
        var filteredData = filteredData.filter(UFOsighting => UFOsighting.city === enteredCity);
    }

    //State cell
    var enteredState = d3.select("#state").property("value");
    if (enteredState != ""){
        var filteredData = filteredData.filter(UFOsighting => UFOsighting.state === enteredState);
    }

    //Country cell
    var enteredCountry = d3.select("#inputGroupSelect01").property("value");
   if (enteredCountry != "Country..."){
        var filteredData = filteredData.filter(UFOsighting => UFOsighting.country === enteredCountry);
   }

    //Shape cell
    var enteredShape = d3.select("#inputGroupSelect02").property("value");
   if (enteredShape != "Shape..."){
        var filteredData = filteredData.filter(UFOsighting => UFOsighting.shape === enteredShape);
   }

    filteredData.forEach(function(UFOsighting) {
       // console.log(UFOsighting);
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(function([key, value]) {
           //console.log(key, value);
            // Append a cell to the row for each value in the object
        var cell = row.append("td");
            cell.text(value);
        });
    });

}

// Create New Filtered Table when button is clicked
button.on("click", function() {
    createTable(data)
    console.log("this is filtered data");
});