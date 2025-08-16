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



// Contact Form section
// ✅ Initialize EmailJS with your Public Key
emailjs.init("yEplFjSgCwUHWdUjG");

// ✅ Contact Form function
let formService = () => {
    const form = document.querySelector("#form");
    const nameInput = document.querySelector("#userName");
    const emailInput = document.querySelector("#userEmail");
    const subjectInput = document.querySelector("#subject");
    const messageArea = document.querySelector("#messageTextArea");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // ✅ Validation regex
        const nameRegex = /^[a-zA-Z\s]{2,50}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const subjectRegex = /^[a-zA-Z0-9\s.,!?'"()-]{2,100}$/;
        const messageRegex = /^.{10,500}$/;

        const validName = nameRegex.test(nameInput.value);
        const validEmail = emailRegex.test(emailInput.value);
        const validSubject = subjectRegex.test(subjectInput.value);
        const validMessage = messageRegex.test(messageArea.value);

        if (!validName) return alert("❌ Please enter a valid name");
        if (!validEmail) return alert("❌ Email is invalid");
        if (!validSubject) return alert("❌ Subject is invalid");
        if (!validMessage) return alert("❌ Message must be between 10–500 characters");

        // ✅ Send the form via EmailJS
        emailjs.sendForm("sunny_emailservice", "template_db2z4g4", form)
            .then(() => {
                alert("✅ Message sent successfully! 🚀");
                form.reset();
            }, (error) => {
                alert("❌ Failed to send message: " + JSON.stringify(error));
            });
    });
};

// ✅ Run the function
formService();
