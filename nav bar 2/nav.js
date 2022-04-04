let services = document.getElementById("services")
let serviceDropdown = document.querySelector("#services > .services-dropdown")

services.addEventListener("click", () => {
 serviceDropdown.classList.toggle("d-none")
})