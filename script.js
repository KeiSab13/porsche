// Step 1 — grab all car rows from the HTML
const rows = document.querySelectorAll(".car-row");

// Step 2 — loop through every row
rows.forEach(function (row) {
  // Step 3 — when mouse enters a row
  row.addEventListener("mouseenter", function () {
    // loop through ALL rows again
    rows.forEach(function (otherRow) {
      // if it's NOT the one being hovered
      if (otherRow !== row) {
        // add the minimized class to it
        otherRow.classList.add("minimized");
      }
    });
  });

  // Step 4 — when mouse leaves a row
  row.addEventListener("mouseleave", function () {
    // remove minimized from ALL rows
    rows.forEach(function (otherRow) {
      otherRow.classList.remove("minimized");
    });
  });
});
