document.addEventListener(
  "DOMContentLoaded",
  () => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const button = document.getElementById("submit");
    const spinner = document.getElementById("spinner");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.classList.add("was-validated");
      if (!form.checkValidity()) {
        form.querySelectorAll(":invalid")[0].focus();
        return;
      }
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      button.disabled = true;
      spinner.classList.remove("hidden");

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.classList.add("text-green-500");
            result.innerHTML = json.message;
          } else {
            console.log(response);
            result.classList.add("text-red-500");
            result.innerHTML = json.message;
          }
        })
        .catch((error) => {
          console.log(error);
          result.classList.add("text-red-500");
          result.innerHTML = "Something went wrong, please try again.";
        })
        .then(function () {
          button.disabled = false;
          spinner.classList.add("hidden");
          form.reset();
          form.classList.remove("was-validated");
          setTimeout(() => {
            result.style.display = "none";
          }, 5000);
        });
    });
  },
  { once: true },
);