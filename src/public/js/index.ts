let submit = document.querySelector("#register");

console.log("Teste");

let inputFirstName = document.getElementById("firstName");

inputFirstName.addEventListener("focus", () => {
    console.log("teste");
    inputFirstName.style.height = "50px";
});

submit.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(this);

    console.log(formData);
});
