// ==========================================
// CORE SYSTEM: Estrellas y Avatar
// ==========================================

const CoreSystem = {
    // --------------------------------------
    // BASE DE DATOS DE OBJETOS (BOUTIQUE)
    // --------------------------------------
    ITEMS: {
        vestidos: [
            { id: "d_pink", name: "Traje Guerrera Mágica", price: 50, icon: "🛡️", zIndex: 10, css: "bottom: 10%; left: 50%; transform: translateX(-50%); font-size: 150px; text-shadow: 0 5px 10px rgba(0,0,0,0.5);" },
            { id: "d_blue", name: "Traje Exploradora Hielo", price: 80, icon: "🧭", zIndex: 10, css: "bottom: 10%; left: 50%; transform: translateX(-50%); font-size: 150px; text-shadow: 0 5px 10px rgba(0,0,0,0.5);" },
            { id: "d_purp", name: "Vestido Realeza Real", price: 100, icon: "👑", zIndex: 10, css: "bottom: 10%; left: 50%; transform: translateX(-50%); font-size: 150px; text-shadow: 0 5px 10px rgba(0,0,0,0.5);" }
        ],
        ropa_nino: [
            { id: "b_hero", name: "Traje Héroe", price: 50, icon: "🦸‍♂️", zIndex: 10, css: "bottom: 10%; left: 50%; transform: translateX(-50%); font-size: 150px; text-shadow: 0 5px 10px rgba(0,0,0,0.5);" },
            { id: "b_explorer", name: "Explorador", price: 80, icon: "🧭", zIndex: 10, css: "bottom: 10%; left: 50%; transform: translateX(-50%); font-size: 150px; text-shadow: 0 5px 10px rgba(0,0,0,0.5);" },
            { id: "b_royal", name: "Príncipe", price: 100, icon: "🤴", zIndex: 10, css: "bottom: 10%; left: 50%; transform: translateX(-50%); font-size: 150px; text-shadow: 0 5px 10px rgba(0,0,0,0.5);" }
        ],
        accesorios: [
            { id: "a_crown", name: "Corona de Oro", price: 100, icon: "👑", zIndex: 15, css: "top: 5%; left: 50%; transform: translateX(-50%) rotate(-10deg); font-size: 80px;" },
            { id: "a_flower", name: "Flor en Cabello", price: 40, icon: "🌸", zIndex: 15, css: "top: 20%; left: 70%; transform: translateX(-50%); font-size: 60px;" },
            { id: "a_wand", name: "Varita Mágica", price: 120, icon: "🪄", zIndex: 15, css: "top: 40%; right: 5%; font-size: 80px; transform: rotate(45deg);" }
        ],
        accesorios_nino: [
            { id: "b_crown", name: "Corona Real", price: 100, icon: "👑", zIndex: 15, css: "top: 5%; left: 50%; transform: translateX(-50%) rotate(-10deg); font-size: 80px;" },
            { id: "b_sword", name: "Espada Madera", price: 100, icon: "🗡️", zIndex: 15, css: "top: 40%; right: 5%; font-size: 80px; transform: rotate(45deg);" },
            { id: "b_shield", name: "Escudo Mágico", price: 40, icon: "🛡️", zIndex: 15, css: "top: 20%; left: 70%; transform: translateX(-50%); font-size: 60px;" },
            { id: "b_cap", name: "Gorra Guay", price: 120, icon: "🧢", zIndex: 15, css: "top: 5%; left: 50%; transform: translateX(-50%) rotate(-10deg); font-size: 80px;" }
        ],
        zapatos: [
            { id: "s_red", name: "Zapatitos Rojos", price: 30, icon: "👠", zIndex: 5, css: "bottom: 0%; left: 50%; transform: translateX(-50%); font-size: 80px;" },
            { id: "s_glass", name: "Zapatos Cristal", price: 60, icon: "💎", zIndex: 5, css: "bottom: 0%; left: 50%; transform: translateX(-50%); font-size: 80px;" }
        ],
        zapatos_nino: [
            { id: "b_boots", name: "Botas Fuertes", price: 30, icon: "🥾", zIndex: 5, css: "bottom: 0%; left: 50%; transform: translateX(-50%); font-size: 80px;" },
            { id: "b_sneakers", name: "Tenis Rápidos", price: 60, icon: "👟", zIndex: 5, css: "bottom: 0%; left: 50%; transform: translateX(-50%); font-size: 80px;" }
        ],
        mascotas: [
            { id: "p_cat", name: "Gatito Mágico", price: 100, icon: "🐈", zIndex: 8, css: "bottom: 0; left: 5%; font-size: 70px; filter: drop-shadow(0 -4px 6px rgba(0,0,0,0.4));" },
            { id: "p_uni", name: "Mini Unicornio", price: 150, icon: "🦄", zIndex: 8, css: "bottom: 0; right: 5%; font-size: 70px; filter: drop-shadow(0 -4px 6px rgba(0,0,0,0.4)); transform: scaleX(-1);" },
            { id: "p_dragon", name: "Dragón Bebé", price: 200, icon: "🐉", zIndex: 8, css: "bottom: 0; left: 50%; transform: translateX(-50%); font-size: 65px; filter: drop-shadow(0 -4px 6px rgba(0,0,0,0.4));" }
        ],
        mascotas_nino: [
            { id: "b_dog", name: "Perrito Fiel", price: 100, icon: "🐕", zIndex: 8, css: "bottom: 0; left: 5%; font-size: 70px; filter: drop-shadow(0 -4px 6px rgba(0,0,0,0.4));" },
            { id: "b_dino", name: "Dino Bebé", price: 150, icon: "🦖", zIndex: 8, css: "bottom: 0; right: 5%; font-size: 70px; filter: drop-shadow(0 -4px 6px rgba(0,0,0,0.4)); transform: scaleX(-1);" },
            { id: "b_dragon", name: "Dragón Fuego", price: 200, icon: "🐉", zIndex: 8, css: "bottom: 0; left: 50%; transform: translateX(-50%); font-size: 65px; filter: drop-shadow(0 -4px 6px rgba(0,0,0,0.4));" }
        ],
        fondos: [
            { id: "bg_castle", name: "Castillo Rosa", price: 120, icon: "🏰", color: "radial-gradient(circle, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)" },
            { id: "bg_space", name: "Galaxia", price: 120, icon: "🌌", color: "radial-gradient(circle, #0f2027, #203a43, #2c5364)" },
            { id: "bg_forest", name: "Bosque Encantado", price: 120, icon: "🌲", color: "radial-gradient(circle, #11998e, #38ef7d)" }
        ]
    },

    // --------------------------------------
    // MANEJO DE ESTRELLAS
    // --------------------------------------
    getStars: function() {
        return parseInt(localStorage.getItem('ma_stars')) || 0;
    },

    addStars: function(amount) {
        let current = this.getStars();
        localStorage.setItem('ma_stars', current + amount);
        this.updateStarDisplays();
        this.showStarAnimation(amount);
    },

    spendStars: function(amount) {
        let current = this.getStars();
        if (current >= amount) {
            localStorage.setItem('ma_stars', current - amount);
            this.updateStarDisplays();
            return true;
        }
        return false;
    },

    updateStarDisplays: function() {
        const displays = document.querySelectorAll('.star-counter');
        displays.forEach(el => {
            el.textContent = this.getStars();
            el.classList.add('pop');
            setTimeout(() => el.classList.remove('pop'), 300);
        });
    },

    showStarAnimation: function(amount) {
        // Simple float animation for stars earned
        const notif = document.createElement('div');
        notif.textContent = `+${amount} ⭐`;
        notif.style.cssText = `
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            background: rgba(0,0,0,0.8); color: #ffd700; padding: 10px 30px;
            border-radius: 30px; font-family: 'Fredoka One', cursive; font-size: 2rem;
            z-index: 9999; border: 3px solid #ffd700;
            animation: floatUpFade 2s forwards; pointer-events: none;
        `;
        document.body.appendChild(notif);

        if (!document.getElementById('core-styles')) {
            const style = document.createElement('style');
            style.id = 'core-styles';
            style.textContent = `
                @keyframes floatUpFade {
                    0% { transform: translate(-50%, 0) scale(0.5); opacity: 0; }
                    20% { transform: translate(-50%, 20px) scale(1.2); opacity: 1; }
                    80% { transform: translate(-50%, 50px) scale(1); opacity: 1; }
                    100% { transform: translate(-50%, 80px) scale(1); opacity: 0; }
                }
                .star-bank {
                    position: fixed; top: 20px; right: 20px;
                    background: rgba(0,0,0,0.6); padding: 10px 20px;
                    border-radius: 30px; border: 3px solid #ffd700;
                    color: white; font-family: 'Fredoka One', cursive; font-size: 1.5rem;
                    z-index: 1000; backdrop-filter: blur(5px);
                    display: flex; align-items: center; gap: 10px; cursor: pointer; text-decoration: none;
                }
                .star-bank:hover { transform: scale(1.05); background: rgba(0,0,0,0.8); }
                .star-bank .icon { font-size: 2rem; }
                .pop { animation: popScale 0.3s; }
                @keyframes popScale { 50% { transform: scale(1.3); color: #ffd700; } }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => notif.remove(), 2000);

        // Sound effect
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if(AudioContext) {
                const ctx = new AudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.3);
            }
        } catch(e) {}
    },

    // --------------------------------------
    // INVENTARIO Y EQUIPAMIENTO
    // --------------------------------------
    getInventory: function() {
        let inv = localStorage.getItem('ma_inventory');
        return inv ? JSON.parse(inv) : [];
    },

    hasItem: function(id) {
        return this.getInventory().includes(id);
    },

    unlockItem: function(id) {
        let inv = this.getInventory();
        if (!inv.includes(id)) {
            inv.push(id);
            localStorage.setItem('ma_inventory', JSON.stringify(inv));
            return true;
        }
        return false;
    },

    getEquipped: function() {
        let eq = localStorage.getItem('ma_equipped');
        const defaultEq = { 
            vestidos: null, ropa_nino: null,
            zapatos: null, zapatos_nino: null,
            accesorios: null, accesorios_nino: null,
            mascotas: null, mascotas_nino: null,
            fondos: null 
        };
        return eq ? JSON.parse(eq) : defaultEq;
    },

    equipItem: function(category, id) {
        let eq = this.getEquipped();
        if (eq[category] === id) {
            eq[category] = null; // Unequip if already equipped
        } else {
            eq[category] = id;
        }
        localStorage.setItem('ma_equipped', JSON.stringify(eq));
    },

    // Item image maps for PNG overlays
    DRESS_IMAGES: {
        d_pink: 'assets/dress_pink.png',
        d_blue: 'assets/dress_ice.png',
        d_purp: 'assets/dress_magic.png',
    },
    BOY_OUTFIT_IMAGES: {
        b_hero: 'assets/boy_hero_body.png?v=5',
        b_explorer: 'assets/boy_explorer_body.png?v=5',
        b_royal: 'assets/boy_royal_body.png?v=5',
    },
    BOY_ACC_IMAGES: {
        b_crown: 'assets/boy_royal_acc.png?v=5',
        b_cap:   'assets/boy_explorer_acc.png?v=5',
    },
    SHOE_IMAGES: {
        s_red:   'assets/shoes_red.png',
        s_glass: 'assets/shoes_crystal.png',
    },
    ACC_IMAGES: {
        a_crown:  { src: 'assets/acc_crown.png',  css: 'top:-2%;left:50%;transform:translateX(-50%);width:70%;height:22%;object-fit:contain;z-index:9;mix-blend-mode:multiply;' },
        a_wand:   { src: 'assets/acc_wand.png',   css: 'bottom:20%;right:-5%;width:40%;height:35%;object-fit:contain;z-index:9;mix-blend-mode:multiply;transform:rotate(10deg);' },
        a_flower: { src: 'assets/acc_flower.png', css: 'top:10%;right:10%;width:30%;height:20%;object-fit:contain;z-index:9;mix-blend-mode:multiply;' },
    },

    // --------------------------------------
    // RENDERIZADO DEL AVATAR (Paper Doll)
    // --------------------------------------
    renderAvatar: function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const eq = this.getEquipped();
        container.style.position = 'relative';
        container.style.overflow = 'hidden';

        // Background
        let bgColor = 'transparent';
        if (eq.fondos) {
            const bgItem = this.ITEMS.fondos.find(i => i.id === eq.fondos);
            if (bgItem) bgColor = bgItem.color;
        }
        container.style.background = bgColor || 'linear-gradient(180deg, #f5e6fa 0%, #e8d0f0 100%)';

        // Clear
        container.innerHTML = '';

        function makeLayer(src, css) {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'avatar-acc';
            img.style.cssText = css;
            return img;
        }

        // ---- LAYER 1: Base Character (Boy or Girl) ----
        const gender = localStorage.getItem('playzone_child_gender') || 'girl';
        const baseImage = gender === 'boy' ? 'assets/boy_base.png' : 'assets/princess_base.png';
        
        container.appendChild(makeLayer(
            baseImage,
            'width:100%;height:100%;object-fit:cover;object-position:top center;position:absolute;top:0;left:0;z-index:2;'
        ));

        // ---- LAYER 2: Dress / Outfit ----
        let dressId = (gender === 'boy') ? eq.ropa_nino : eq.vestidos;
        let dressMap = (gender === 'boy') ? this.BOY_OUTFIT_IMAGES : this.DRESS_IMAGES;

        if (dressId && dressMap[dressId]) {
            let dressCSS;
            if (gender === 'boy') {
                // Boy outfits are cropped body pieces - position over torso
                dressCSS = `position:absolute; top:20%; left:45%;
                    transform:translateX(-50%);
                    width:65%; height:55%;
                    object-fit:contain; object-position:top center;
                    z-index:5; pointer-events:none;
                    opacity:0.85;`;
            } else {
                // Girl dresses are full centered garments
                dressCSS = `position:absolute; top:34%; left:50%;
                    transform:translateX(-50%);
                    width:95%; height:60%;
                    object-fit:contain; object-position:top center;
                    z-index:5; pointer-events:none;
                    mix-blend-mode:multiply;`;
            }
            container.appendChild(makeLayer(dressMap[dressId], dressCSS));
        }

        // ---- LAYER 3: Shoes ----
        let shoeId = (gender === 'boy') ? eq.zapatos_nino : eq.zapatos;
        let shoeCat = (gender === 'boy') ? 'zapatos_nino' : 'zapatos';

        if (shoeId) {
            // If we have a PNG for shoes (optional, currently using icons for boys)
            const itemDef = this.ITEMS[shoeCat].find(i => i.id === shoeId);
            if (itemDef) {
                const el = document.createElement('div');
                el.style.cssText = `position:absolute;pointer-events:none;z-index:7;${itemDef.css}`;
                el.textContent = itemDef.icon;
                container.appendChild(el);
            }
        }

        // ---- LAYER 4: Accessories ----
        let accId = (gender === 'boy') ? eq.accesorios_nino : eq.accesorios;
        let accCat = (gender === 'boy') ? 'accesorios_nino' : 'accesorios';

        if (accId) {
            if (gender === 'boy' && this.BOY_ACC_IMAGES[accId]) {
                // PNG Overlay for Boy Accessories (crown, hat)
                container.appendChild(makeLayer(
                    this.BOY_ACC_IMAGES[accId],
                    `position:absolute; top:-5%; left:50%;
                     transform:translateX(-50%);
                     width:35%; height:22%;
                     object-fit:contain; object-position:center;
                     z-index:15; pointer-events:none;`
                ));
            } else if (gender === 'girl' && this.ACC_IMAGES[accId]) {
                // PNG Overlay for Girl Accessories (crown, wand, flower)
                const accDef = this.ACC_IMAGES[accId];
                container.appendChild(makeLayer(
                    accDef.src,
                    `position:absolute;pointer-events:none;${accDef.css}`
                ));
            } else {
                // Emoji fallback
                const itemDef = this.ITEMS[accCat].find(i => i.id === accId);
                if (itemDef) {
                    const el = document.createElement('div');
                    el.className = 'avatar-acc';
                    el.textContent = itemDef.icon;
                    el.style.cssText = `position:absolute;pointer-events:none;z-index:${itemDef.zIndex || 15};${itemDef.css}`;
                    container.appendChild(el);
                }
            }
        }

        // ---- LAYER 5: Pets ----
        let petId = (gender === 'boy') ? eq.mascotas_nino : eq.mascotas;
        let petCat = (gender === 'boy') ? 'mascotas_nino' : 'mascotas';

        if (petId) {
            const itemDef = this.ITEMS[petCat].find(i => i.id === petId);
            if (itemDef) {
                const el = document.createElement('div');
                el.className = 'avatar-acc';
                el.textContent = itemDef.icon;
                el.style.cssText = `position:absolute;pointer-events:none;z-index:${itemDef.zIndex || 8};${itemDef.css}`;
                container.appendChild(el);
            }
        }
    },

    // --------------------------------------
    // ROTACIÓN DE JUEGOS
    // --------------------------------------
    suggestRotation: function(config = {}) {
        const title = config.title || "¡Lo estás haciendo increíble!";
        const msg = config.msg || "Has ganado muchas estrellas. ¿Qué tal si vamos a la Boutique o probamos otro juego?";
        const voiceMsg = config.voiceMsg || "¡Lo estás haciendo súper! ¿Quieres gastar tus estrellas o probar algo nuevo?";

        // Evitar múltiples modales
        if (document.getElementById('rotation-modal')) return;

        try {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(voiceMsg);
                u.lang = 'es-ES';
                u.pitch = 1.3;
                window.speechSynthesis.speak(u);
            }
        } catch(e) {}

        const overlay = document.createElement('div');
        overlay.id = 'rotation-modal';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8); z-index: 10000;
            display: flex; justify-content: center; align-items: center;
            backdrop-filter: blur(5px);
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            background: linear-gradient(135deg, #8a2be2, #ff69b4);
            padding: 40px; border-radius: 40px; text-align: center;
            border: 5px solid #ffd700; box-shadow: 0 0 50px rgba(255,215,0,0.5);
            max-width: 500px; width: 90%; font-family: 'Fredoka One', cursive; color: white;
            animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        `;

        modal.innerHTML = `
            <style>
                @keyframes popIn { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .rot-btn {
                    display: block; width: 100%; margin: 15px 0; padding: 15px; border-radius: 20px;
                    font-size: 1.3rem; border: none; cursor: pointer; font-family: 'Fredoka One', cursive;
                    transition: 0.3s; text-decoration: none; color: black;
                }
                .rot-btn:hover { transform: scale(1.05); }
                .btn-boutique { background: #ffd700; box-shadow: 0 5px 0 #ccaa00; }
                .btn-hub { background: #00ffff; box-shadow: 0 5px 0 #00cccc; }
                .btn-stay { background: white; color: #ff69b4; box-shadow: 0 5px 0 #cccccc; }
            </style>
            <div style="font-size: 60px; margin-bottom: 10px;">🌟👑🌟</div>
            <h2 style="font-size: 2.2rem; margin: 0 0 15px 0; text-shadow: 0 2px 5px rgba(0,0,0,0.3);">${title}</h2>
            <p style="font-size: 1.2rem; margin-bottom: 30px;">${msg}</p>
            <button class="rot-btn btn-boutique" onclick="location.href=(localStorage.getItem('playzone_child_gender') === 'boy' ? 'armario_nino.html' : 'boutique.html')">👕 Ir al Armario</button>
            <button class="rot-btn btn-hub" onclick="location.href='index.html'">🏰 Volver al Hub</button>
            <button class="rot-btn btn-stay" id="btn-close-rot">▶️ Seguir jugando aquí</button>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        document.getElementById('btn-close-rot').onclick = () => {
            overlay.remove();
        };
    },

    // --------------------------------------
    // INICIALIZACIÓN GLOBAL
    // --------------------------------------
    initUI: function() {
        // Inject Star Bank into any page that calls this
        const isWardrobe = window.location.pathname.includes('boutique.html') || window.location.pathname.includes('armario_nino.html');
        const gender = localStorage.getItem('playzone_child_gender') || 'girl';
        
        if (!document.getElementById('global-star-bank')) {
            const bank = document.createElement('a');
            bank.id = 'global-star-bank';
            bank.className = 'star-bank';
            bank.href = gender === 'boy' ? 'armario_nino.html' : 'boutique.html';
            
            if (isWardrobe) {
                bank.href = 'index.html'; // If in wardrobe, clicking stars goes to hub
                bank.title = "Volver al Hub";
            } else {
                bank.title = "Ir al Armario";
            }
            
            bank.innerHTML = `
                <span class="star-counter">${this.getStars()}</span>
                <span class="icon">⭐</span>
            `;
            document.body.appendChild(bank);
            
            // Add required styles
            if (!document.getElementById('core-styles')) {
                const style = document.createElement('style');
                style.id = 'core-styles';
                style.textContent = `
                    .star-bank {
                        position: fixed; top: 20px; right: 20px;
                        background: rgba(0,0,0,0.6); padding: 10px 20px;
                        border-radius: 30px; border: 3px solid #ffd700;
                        color: white; font-family: 'Fredoka One', cursive; font-size: 1.5rem;
                        z-index: 1000; backdrop-filter: blur(5px);
                        display: flex; align-items: center; gap: 10px; cursor: pointer; text-decoration: none;
                        box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
                        transition: 0.3s;
                    }
                    .star-bank:hover { transform: scale(1.05); background: rgba(0,0,0,0.8); box-shadow: 0 0 30px rgba(255, 215, 0, 0.8); }
                    .star-bank .icon { font-size: 2rem; }
                    .pop { animation: popScale 0.3s; }
                    @keyframes popScale { 50% { transform: scale(1.4); color: #fff; } }
                `;
                document.head.appendChild(style);
            }
        }
    }
};

// Auto-init if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CoreSystem.initUI());
} else {
    CoreSystem.initUI();
}
