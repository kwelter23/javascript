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
    console.log(filterDate);

// Select the Table to Filter
var filteredTable = d3.select(".tbody");

// This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");

// We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  //enter code to filter table
  console.log(d3.event.target);
});


  

// Input fields can trigger a change event when new text is entered.
filterDate.on("click", function() {
    var newDate = d3.event.target.value;
    console.log(newDate);
  });
   

// Use D3 `.on` to attach a click handler for the date filter
//button.on("click", function() {
    //if
    //    filterDate
    // Filter Data
  //  var filteredDate = parseInt(counter.text());
  
    // Upvotes should increment the counter
  //  currentCount += 1;
  
    // Set the counter h1 text to the new count
   // counter.text(currentCount);
 // });
  
 // Create a custom function to return players who made the team
//function datefilter(sighting) {
    // return player.madeTeam == true;
    // A more concise way to express a boolean conditional
  //  return sighting.datefilter;
  //}
  
  // Call the custom function with filter()
  //var datefilter = data.filter(sighting);
  