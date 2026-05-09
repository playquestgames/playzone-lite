const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

const TARGET_DIR = path.join(__dirname, 'assets');
const FILES = [
    'boy_hero_body.png',
    'boy_explorer_body.png',
    'boy_royal_body.png',
    'boy_hero_acc.png',
    'boy_explorer_acc.png',
    'boy_royal_acc.png'
];

async function removeTabs(filename) {
    const filePath = path.join(TARGET_DIR, filename);
    if (!fs.existsSync(filePath)) return;

    try {
        const image = await Jimp.read(filePath);
        const { width, height } = image.bitmap;

        console.log(`🧹 Limpiando pestañas en ${filename}...`);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const idx = (y * width + x) * 4;
                const r = image.bitmap.data[idx];
                const g = image.bitmap.data[idx + 1];
                const b = image.bitmap.data[idx + 2];
                const a = image.bitmap.data[idx + 3];

                if (a > 0) {
                    // Las pestañas son blancas o gris muy claro
                    const isWhiteish = (r > 200 && g > 200 && b > 200);
                    
                    // Estrategia: Las pestañas suelen estar en los bordes laterales del dibujo
                    // Si el pixel es blanco y está muy alejado del centro horizontal, es probable que sea una pestaña
                    const distFromCenter = Math.abs(x - width / 2) / (width / 2);
                    
                    if (isWhiteish && distFromCenter > 0.3) {
                        image.bitmap.data[idx + 3] = 0; // Borrar
                    }
                }
            }
        }

        // Suavizar un poco los bordes resultantes
        image.blur(1); 

        await image.write(filePath);
        console.log(`  ✅ ${filename} limpio.`);
    } catch (err) {
        console.error(`  ❌ Error en ${filename}:`, err.message);
    }
}

async function main() {
    for (const f of FILES) {
        await removeTabs(f);
    }
}

main();
