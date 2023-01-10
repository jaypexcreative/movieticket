// get all td elements on the page
const tdElements = document.getElementsByTagName("td");
const seat = document.getElementsByClassName('seat');
let selectedCount = 0;
const totalTickets = document.getElementById('totaltickets');
const totalCost = document.getElementById('totalcost');

// assign a class to each td element
for (let i = 0; i < tdElements.length; i++) {
  // randomly select "selected" or "available"
  let randomClass = Math.random() < 0.7 ? "booked" : "available";

  // assign the class to the td element
  tdElements[i].classList.add(randomClass);

  tdElements[i].addEventListener("click", function() {
    if (this.classList.contains("available") && this.classList.contains('seat')) {
        
        
        // toggle class "selected" on clicked td element
        this.classList.toggle("selected");
    }
    updateSelectedCount();
});

}

function updateSelectedCount() {
    let selectedCount = 0;
    for (let i = 0; i < tdElements.length; i++) {
        if (tdElements[i].classList.contains("selected")) {
            selectedCount++;
        }
    }
    totalTickets.textContent = selectedCount;
    totalCost.textContent = `\$${selectedCount * 10.25}`;
}