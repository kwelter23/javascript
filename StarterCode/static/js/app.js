console.log("this works")

// get reference from table body
var tbody = d3.select("tbody");

//Loop through data and Use d3 to update each cell's text with ufoSightings Data
data.forEach(function(ufoSightings) {
       console.log(ufoSightings);
       var row = tbody.append("tr");
       Object.entries(ufoSightings).forEach(function([key, value]) {
         console.log(key, value);
     // Append a cell to the row for each value in the weather report object

         var cell = row.append("td");
         cell.text(value);


   });
});
       
// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page
var filterDate = d3.select("#datetime");

// Select the Table to Filter
var filteredTable = d3.select(".tbody");

 

// Use D3 `.on` to attach a click handler for the date filter
//button.on("click", function() {
    // Filter Data
  //  var currentCount = parseInt(counter.text());
  
    // Upvotes should increment the counter
  //  currentCount += 1;
  
    // Set the counter h1 text to the new count
   // counter.text(currentCount);
 // });
  