document
  .getElementById("akan-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const dd = parseInt(document.getElementById("dd").value);
    const mm = parseInt(document.getElementById("mm").value);
    const yy = parseInt(document.getElementById("yy").value);
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    const errorElement = document.getElementById("error");
    const resultElement = document.getElementById("result");

    // Reset previous messages
    errorElement.innerText = "";
    resultElement.innerText = "";

    // Input validation
    if (isNaN(dd) || dd < 1 || dd > 31) {
      errorElement.innerText = "Please enter a valid day (1-31).";
      return;
    }

    if (isNaN(mm) || mm < 1 || mm > 12) {
      errorElement.innerText = "Please select a valid month.";
      return;
    }

    if (isNaN(yy) || yy < 1 || yy > new Date().getFullYear()) {
      errorElement.innerText = "Please enter a valid year (1 to current year).";
      return;
    }

    if (!male && !female) {
      errorElement.innerText = "Please select your gender.";
      return;
    }

    const birthDate = new Date(yy, mm - 1, dd);

    // Ensure date is valid (accounts for incorrect days for months like Feb 30)
    if (
      birthDate.getDate() !== dd ||
      birthDate.getMonth() + 1 !== mm ||
      birthDate.getFullYear() !== yy
    ) {
      errorElement.innerText = "The provided date is invalid.";
      return;
    }

    // Determine day of the week and corresponding Akan name
    const dayOfTheWeek = birthDate.getDay();
    const akanName = male ? maleNames[dayOfTheWeek] : femaleNames[dayOfTheWeek];

    // Display result
    resultElement.innerText = `You were born on a ${days[dayOfTheWeek]}. Your Akan name is ${akanName}!`;
    resultElement.style.color = male ? "blue" : "deeppink";
  });
