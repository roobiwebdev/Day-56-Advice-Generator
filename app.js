const adviceId = document.getElementById("adviceId");
const adviceTxt = document.querySelector(".advice");
const diceImg = document.querySelector(".dice-img");

const fetchingAdvice = async () => {
    try {
        // Start the rolling animation
        diceImg.classList.add("roll-img");
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        adviceId.textContent = `#${data.slip.id}`;
        adviceTxt.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.log(error);
    } finally {
        diceImg.classList.remove("roll-img");
    }
};

diceImg.addEventListener("click", () => {
    fetchingAdvice();
});
