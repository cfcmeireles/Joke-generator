(function () {
  "use strict";

  let apiUrl = "https://geek-jokes.sameerkumar.website/api?format=json";
  const randomJoke = document.querySelector(".random-joke");
  const generateBtn = document.querySelector(".generate-joke");
  const loading = document.querySelector(".loading");

  function getJoke() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => data.joke);
  }

  function generateJoke() {
    randomJoke.innerHTML = "";
    randomJoke.classList.remove("active");
    loading.style.display = "block";
    setTimeout(async () => {
      const content = await getJoke();
      loading.style.display = "none";
      randomJoke.classList.add("active");
      randomJoke.innerHTML = `${content} 😂`;
    }, 3000);
  }

  getJoke();
  generateBtn.addEventListener("click", generateJoke);
})();
