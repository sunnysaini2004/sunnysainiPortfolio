const Nhamburger = document.querySelector("#Nhamburger");
const Chamburger = document.querySelector("#Chamburger");
const header = document.querySelector("#header");
const main = document.querySelector("main");
// ✅ Function to set initial state
function setInitialState() {
    if (window.innerWidth <= 768) {
        main.style.marginLeft = "0px";
        header.classList.remove("active");
        Nhamburger.classList.remove("hidden");
        Chamburger.classList.add("hidden");
    } else {
        main.style.marginLeft = "15.625rem";


        header.classList.add("active");
        Nhamburger.classList.add("hidden");
        Chamburger.classList.add("hidden");
    }
}

// ✅ Click to open menu
Nhamburger.addEventListener("click", () => {

    header.classList.add("active");
    Nhamburger.classList.add("hidden");
    Chamburger.classList.remove("hidden");
});

// ✅ Click to close menu
Chamburger.addEventListener("click", () => {

    header.classList.remove("active");
    Chamburger.classList.add("hidden");
    Nhamburger.classList.remove("hidden");
});

// ✅ Reset state on window resize
window.addEventListener("resize", setInitialState);

// ✅ Run on first load
setInitialState();



// ✅ Initialize EmailJS with your Public Key
emailjs.init("yEplFjSgCwUHWdUjG");

let formService = () => {
    const form = document.querySelector("#form");
    const nameInput = document.querySelector("#userName");
    const emailInput = document.querySelector("#userEmail");
    const subjectInput = document.querySelector("#subject");
    const messageArea = document.querySelector("#messageTextArea");

    // Error + Result elements
    let result = document.querySelector("#resultFormSubmit");
    let errorMessage = document.querySelector("#errorMessage");
    let errorSubject = document.querySelector("#errorSubject");
    let errorEmail = document.querySelector("#errorEmail");
    let errorName = document.querySelector("#errorName");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // 🔹 Reset messages before checking
        result.textContent = "";
        result.classList.remove("activeResultMessage");

        errorName.classList.remove("activeMessage");
        errorEmail.classList.remove("activeMessage");
        errorSubject.classList.remove("activeMessage");
        errorMessage.classList.remove("activeMessage");

        // ✅ Validation regex
        const nameRegex = /^[a-zA-Z\s]{2,50}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const subjectRegex = /^[a-zA-Z0-9\s.,!?'"()-]{2,100}$/;
        const messageRegex = /^.{10,500}$/;

        const validName = nameRegex.test(nameInput.value.trim());
        const validEmail = emailRegex.test(emailInput.value.trim());
        const validSubject = subjectRegex.test(subjectInput.value.trim());
        const validMessage = messageRegex.test(messageArea.value.trim());

        // 🔹 Show errors inline
        if (!validName) {
            errorName.classList.add("activeMessage");
            return;
        }
        if (!validEmail) {
            errorEmail.classList.add("activeMessage");
            return;
        }
        if (!validSubject) {
            errorSubject.classList.add("activeMessage");
            return;
        }
        if (!validMessage) {
            errorMessage.classList.add("activeMessage");
            return;
        }

        // ✅ Send via EmailJS
        emailjs.sendForm("sunny_emailservice", "template_db2z4g4", form)
            .then(() => {
                result.textContent = "✔️ Message Sent Successfully!";
                result.classList.add("activeResultMessage");

                // Auto-hide result after 10s
                setTimeout(() => {
                    result.textContent = "";
                    result.classList.remove("activeResultMessage");
                }, 10000);

                form.reset();
            }, (error) => {
                result.textContent = "❌ Failed to send message. Try again!";
                result.classList.add("activeResultMessage");

                // Auto-hide result after 10s
                setTimeout(() => {
                    result.textContent = "";
                    result.classList.remove("activeResultMessage");
                }, 10000);
            });
    });
};

// ✅ Run function
formService();


