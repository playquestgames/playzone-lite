const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

const TARGET_DIR = path.join(__dirname, 'assets');
const FILES = [
    'boy_hero.png',
    'boy_explorer.png',
    'boy_royal.png'
];

async function removeCheckeredBackground(filename) {
    const filePath = path.join(TARGET_DIR, filename);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    try {
        const image = await Jimp.read(filePath);
        const { width, height } = image.bitmap;

        console.log(`Procesando ${filename} (${width}x${height})...`);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const idx = (y * width + x) * 4;
                const r = image.bitmap.data[idx];
                const g = image.bitmap.data[idx + 1];
                const b = image.bitmap.data[idx + 2];

                // Checkered pattern usually consists of white (#FFFFFF) and light grey (#EBEBEB / #CCCCCC)
                const isWhite = (r > 235 && g > 235 && b > 235);
                const isGrey = (Math.abs(r - g) < 8 && Math.abs(g - b) < 8 && r > 180 && r < 235);

                if (isWhite || isGrey) {
                    image.bitmap.data[idx + 3] = 0; // Transparent
                }
            }
        }

        await image.write(filePath);
        console.log(`✅ ${filename} procesado.`);
    } catch (err) {
        console.error(`❌ Error en ${filename}:`, err.message);
    }
}

async function main() {
    for (const f of FILES) {
        await removeCheckeredBackground(f);
    }
}

main();
