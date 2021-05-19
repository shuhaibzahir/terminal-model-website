var about = document.querySelector("#about");
var contact = document.querySelector("#contact");
var aboutContent = document.querySelector("#about-content");
var contactContent = document.querySelector("#contact-content");
about.addEventListener("click", () => {
  const winb = new WinBox({
    title: "About Me",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
  });
});
contact.addEventListener("click", () => {
  const winb = new WinBox({
    title: "Contact Me",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent,
  });
});
