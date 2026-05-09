// === VOZ MÁGICA DE MARIA ANTONIA ===
// Selecciona automáticamente la mejor voz disponible en español

let bestVoice = null;

// Orden de preferencia: voces más naturales primero
const PREFERRED_VOICES = [
    'Google español',
    'Google Spanish',
    'Microsoft Sabina',
    'Microsoft Helena',
    'Microsoft Laura',
    'Mónica',
    'Monica',
    'Paulina',
    'Diego',
    'Jorge',
];

function loadBestVoice() {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return;

    // Primero buscar por nombre exacto en lista preferida
    for (const preferred of PREFERRED_VOICES) {
        const found = voices.find(v => v.name.includes(preferred));
        if (found) { bestVoice = found; break; }
    }

    // Si no encontró ninguna preferida, usar cualquier voz en español
    if (!bestVoice) {
        bestVoice = voices.find(v => v.lang.startsWith('es')) || voices[0];
    }

    console.log('[VOZ] Usando:', bestVoice?.name, bestVoice?.lang);
}

// Cargar voces al inicio (el evento es necesario en Chrome)
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadBestVoice;
}
loadBestVoice();

// Función principal de habla
window.speak = function(text, pitch = 1.15, rate = 0.88) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'es-ES';
    msg.pitch = pitch;
    msg.rate = rate;
    msg.volume = 1;

    if (bestVoice) msg.voice = bestVoice;

    speechSynthesis.speak(msg);
};

// Inyectar selector de voz flotante en la página
window.addEventListener('DOMContentLoaded', () => {
    const panel = document.createElement('div');
    panel.id = 'voice-panel';
    panel.style.cssText = `
        position: fixed; bottom: 15px; left: 15px; z-index: 9999;
        background: rgba(0,0,30,0.85); border: 2px solid #ffd700;
        border-radius: 20px; padding: 10px 15px;
        font-family: 'Fredoka One', cursive; color: white;
        font-size: 0.85rem; backdrop-filter: blur(10px);
    `;
    panel.innerHTML = `
        <div style="color:#ffd700; margin-bottom:6px;">🔊 Voz:</div>
        <select id="voice-select" style="
            background:#1a1a3e; color:white; border:1px solid #8a2be2;
            border-radius:10px; padding:5px 8px; font-family:inherit;
            font-size:0.85rem; width:180px; cursor:pointer;
        "></select>
        <button onclick="testVoice()" style="
            margin-top:6px; display:block; width:100%;
            background:#ff69b4; color:white; border:none;
            border-radius:10px; padding:5px; cursor:pointer;
            font-family:inherit; font-size:0.8rem;
        ">🎤 Probar voz</button>
    `;
    document.body.appendChild(panel);

    function populateVoices() {
        const sel = document.getElementById('voice-select');
        if (!sel) return;
        const voices = speechSynthesis.getVoices();
        const esVoices = voices.filter(v => v.lang.startsWith('es'));
        sel.innerHTML = '';
        esVoices.forEach((v, i) => {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = v.name;
            if (v === bestVoice) opt.selected = true;
            sel.appendChild(opt);
        });

        sel.onchange = () => {
            bestVoice = esVoices[parseInt(sel.value)];
            window.speak('¡Hola Maria Antonia! Esta soy yo.', 1.2);
        };
    }

    populateVoices();
    speechSynthesis.onvoiceschanged = () => { loadBestVoice(); populateVoices(); };
});

window.testVoice = function() {
    window.speak('¡Hola Maria Antonia! ¿Lista para aprender algo nuevo hoy?', 1.2);
};
