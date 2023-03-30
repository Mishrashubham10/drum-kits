const container = document.querySelector(".container");

const kits = ["crash", "kick", "snare", "tom"];

kits.forEach((kit) => {
    console.log(kit);

    // Creating Custom Buttons
    const btn = document.createElement("button");
    // Background image
    btn.style.backgroundImage = "url(images/" + kit + ".png)";
    // Adding class to the Buttons
    btn.classList.add('btn');
    // Appending to its parent so it will visible on page
    container.appendChild(btn);
    // Adding button texts
    btn.innerText = kit;

    // Adding sound to buttons
    const audio = document.createElement('audio');
        // Appending to its parent so it will visible on page
    container.appendChild(audio);
    // Sound route
    audio.src = "sounds/" + kit + ".mp3";

    btn.addEventListener("click", () => {
        audio.play();
    });
});