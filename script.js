const voiceList = document.getElementById("voiceList");
const btn = document.getElementById('btn');

const rateInput = document.getElementById("rateInput");
const pitchInput = document.getElementById("pitchInput");

function loadVoices() {
    const voices = speechSynthesis.getVoices();

    voiceList.innerHTML = "";

    voices.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceList.appendChild(option);
    });
}

speechSynthesis.onvoiceschanged = loadVoices;

loadVoices();


btn.addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === voiceList.value);
    utterance.rate = rateInput.value;
    utterance.pitch = pitchInput.value;
    speechSynthesis.speak(utterance);
})