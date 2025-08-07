function updateDateDisplay() {
  const now = new Date();

  // Options for the day of the week (e.g., "Thursday")
  const dayOptions = { weekday: "long" };
  const dayOfWeek = now.toLocaleDateString("en-US", dayOptions); // 'en-US' for standard English weekday names

  // Options for the full date (e.g., "July 24, 2025")
  const fullDateOptions = {
    month: "long", // Full month name (e.g., "July")
    day: "numeric", // Day of the month (e.g., "24")
    year: "numeric", // Full year (e.g., "2025")
  };
  const fullDate = now.toLocaleDateString("en-US", fullDateOptions);

  // Update the HTML elements
  document.getElementById("current-day").textContent = dayOfWeek;
  document.getElementById("current-full-date").textContent = fullDate;
}

// Call the function once immediately to display the date without delay
updateDateDisplay();
