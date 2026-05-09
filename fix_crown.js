const { Jimp } = require('jimp');
const path = require('path');

const TARGET_DIR = path.join(__dirname, 'assets');

async function fixCrown() {
    console.log('👑 Arreglando la corona del príncipe...');
    
    const image = await Jimp.read(path.join(TARGET_DIR, 'boy_royal.png'));
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    // La corona está en la esquina superior derecha de la imagen original
    // Recortamos desde x=67% para evitar la manga, y hasta h=30% para evitar la túnica
    const accX = Math.floor(w * 0.67);
    const accY = 0;
    const accW = Math.floor(w * 0.33);
    const accH = Math.floor(h * 0.30);
    
    let acc = image.clone().crop({ x: accX, y: accY, w: accW, h: accH });
    
    // Limpiar fondo blanco
    const { width, height } = acc.bitmap;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const r = acc.bitmap.data[idx];
            const g = acc.bitmap.data[idx + 1];
            const b = acc.bitmap.data[idx + 2];
            if (r > 235 && g > 235 && b > 235) {
                acc.bitmap.data[idx + 3] = 0;
            }
        }
    }
    
    // Trim transparent
    let minX = width, minY = height, maxX = 0, maxY = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            if (acc.bitmap.data[idx + 3] > 10) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }
    
    if (maxX > minX && maxY > minY) {
        acc = acc.crop({ x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 });
    }
    
    await acc.write(path.join(TARGET_DIR, 'boy_royal_acc.png'));
    console.log(`  ✅ Corona limpia: ${acc.bitmap.width}x${acc.bitmap.height}px`);
}

fixCrown();
