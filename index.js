const rcs = document.querySelectorAll(".radio_circle");
    const submit = document.querySelector(".submit");
    const thanks = document.querySelector(".thanks_card");
    const rating = document.getElementById("rating_revision");

    rcs.forEach(element => {
      element.addEventListener("click", (ev) => {
        rcs.forEach((element) => {
          element.classList.remove("rc_active")
        })
        element.classList.add("rc_active")
        rating.innerText = ev.currentTarget.innerText;

        submit.addEventListener("click", () => {
          thanks.style.display = "flex";
        })
      })
      element.addEventListener("mouseenter", () => {
        element.classList.add("rc_hover")
      })
      element.addEventListener("mouseleave", () => {
        element.classList.remove("rc_hover")
      })
    })
