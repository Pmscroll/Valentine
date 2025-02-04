const messages = [
    "Raki Sure?",
    "Sure Sure??",
    "Massralek Walo?",
    "Debdouuubii Please...",
    "Khemmi Fihaaa...!",
    "T9olili Lala, Mara7ch Nkon Ghaya...",
    "Rah Nez3eff...",
    "Nez3ef Bzzf...",
    "Seha Seha, Mara7ch Nzid Nse9ssik...",
    "Ni Ngessr,9olili Wah Pleaaaasee..! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}