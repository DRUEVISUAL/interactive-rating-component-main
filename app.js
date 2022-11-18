const rc1 = document.querySelector(".rc1");
const rc2 = document.querySelector(".rc2");
const rc3 = document.querySelector(".rc3");
const rc4 = document.querySelector(".rc4");
const rc5 = document.querySelector(".rc5");
const submit = document.querySelector(".submit");
const thanks = document.querySelector(".thanks_card")
const rating = document.getElementById("rating_revision");

 rc1.addEventListener("click", () => {
    const state = rc1.getAttribute("isChecked")

    if (state === "false") {
        rc1.classList.add('rc_active')
        rc2.classList.remove('rc_active')
        rc3.classList.remove('rc_active')
        rc4.classList.remove('rc_active')
        rc5.classList.remove('rc_active')
        rating.innerHTML = "";
        rating.textContent += "1";
        rc1.setAttribute("isChecked", true)
        rc2.setAttribute("isChecked", false)
        rc3.setAttribute("isChecked", false)
        rc4.setAttribute("isChecked", false)
        rc5.setAttribute("isChecked", false)
    }
 });

 rc2.addEventListener("click", () => {
    const state = rc2.getAttribute("isChecked")

    if (state === "false") {
        rc1.classList.remove('rc_active')
        rc2.classList.add('rc_active')
        rc3.classList.remove('rc_active')
        rc4.classList.remove('rc_active')
        rc5.classList.remove('rc_active')
        rating.innerHTML = "";
        rating.textContent += "2";
        rc1.setAttribute("isChecked", false)
        rc2.setAttribute("isChecked", true)
        rc3.setAttribute("isChecked", false)
        rc4.setAttribute("isChecked", false)
        rc5.setAttribute("isChecked", false)
    }
 });

 rc3.addEventListener("click", () => {
    const state = rc3.getAttribute("isChecked")

    if (state === "false") {
        rc1.classList.remove('rc_active')
        rc2.classList.remove('rc_active')
        rc3.classList.add('rc_active')
        rc4.classList.remove('rc_active')
        rc5.classList.remove('rc_active')

        rating.innerHTML = "";
        rating.textContent += "3";
        rc1.setAttribute("isChecked", false)
        rc2.setAttribute("isChecked", false)
        rc3.setAttribute("isChecked", true)
        rc4.setAttribute("isChecked", false)
        rc5.setAttribute("isChecked", false)
    }
 });

 rc4.addEventListener("click", () => {
    const state = rc4.getAttribute("isChecked")

    if (state === "false") {
        rc1.classList.remove('rc_active')
        rc2.classList.remove('rc_active')
        rc3.classList.remove('rc_active')
        rc4.classList.add('rc_active')
        rc5.classList.remove('rc_active')
        rating.innerHTML = "";
        rating.textContent += "4";
        rc1.setAttribute("isChecked", false)
        rc2.setAttribute("isChecked", false)
        rc3.setAttribute("isChecked", false)
        rc4.setAttribute("isChecked", true)
        rc5.setAttribute("isChecked", false)
    }
 });

 rc5.addEventListener("click", () => {
    const state = rc5.getAttribute("isChecked")

    if (state === "false") {
        rc1.classList.remove('rc_active')
        rc2.classList.remove('rc_active')
        rc3.classList.remove('rc_active')
        rc4.classList.remove('rc_active')
        rc5.classList.add('rc_active')
        rating.innerHTML = "";
        rating.textContent += "5";
        rc1.setAttribute("isChecked", false)
        rc2.setAttribute("isChecked", false)
        rc3.setAttribute("isChecked", false)
        rc4.setAttribute("isChecked", false)
        rc5.setAttribute("isChecked", true)
    }
 });

 rc1.addEventListener("mouseenter", () => {
    rc1.classList.add("rc_hover")
 });

 rc1.addEventListener("mouseleave", () => {
    rc1.classList.remove("rc_hover")
 });

 rc2.addEventListener("mouseenter", () => {
    rc2.classList.add("rc_hover")
 });

 rc2.addEventListener("mouseleave", () => {
    rc2.classList.remove("rc_hover")
 });
 

 rc3.addEventListener("mouseenter", () => {
    rc3.classList.add("rc_hover")
 });

 rc3.addEventListener("mouseleave", () => {
    rc3.classList.remove("rc_hover")
 });
 

 rc4.addEventListener("mouseenter", () => {
    rc4.classList.add("rc_hover")
 });

 rc4.addEventListener("mouseleave", () => {
    rc4.classList.remove("rc_hover")
 });
 

 rc5.addEventListener("mouseenter", () => {
    rc5.classList.add("rc_hover")
 });

 rc5.addEventListener("mouseleave", () => {
    rc5.classList.remove("rc_hover")
 });

submit.addEventListener("mouseenter", () => {
    submit.classList.add("su_hover")
 });

 submit.addEventListener("mouseleave", () => {
    submit.classList.remove("su_hover")
 });

 submit.addEventListener("click", () => {
    thanks.style.display = "flex";
 })
 
 

