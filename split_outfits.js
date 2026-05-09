const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

const TARGET_DIR = path.join(__dirname, 'assets');

// Cada outfit tiene la ropa en la parte izquierda y el accesorio en la parte derecha
// Pero las proporciones son diferentes para cada uno, así que definimos manualmente
const OUTFITS = [
    { 
        base: 'boy_royal', 
        name: 'Príncipe',
        // La túnica ocupa aprox 0-65% del ancho, la corona está en 65-95% del ancho y 0-35% del alto
        bodyRect: { x: 0, y: 0, wPct: 0.62, hPct: 1.0 },
        accRect:  { x: 0.62, y: 0, wPct: 0.38, hPct: 0.40 }
    },
    { 
        base: 'boy_explorer', 
        name: 'Explorador',
        // El chaleco ocupa 0-52%, el sombrero está en 52-100% y 0-60%
        bodyRect: { x: 0, y: 0, wPct: 0.52, hPct: 1.0 },
        accRect:  { x: 0.52, y: 0, wPct: 0.48, hPct: 0.65 }
    },
    { 
        base: 'boy_hero', 
        name: 'Héroe',
        // La capa ocupa toda la imagen, no tiene accesorio separado
        bodyRect: { x: 0, y: 0, wPct: 1.0, hPct: 1.0 },
        accRect:  null  // No tiene accesorio visual separado
    }
];

async function trimTransparent(image) {
    // Find the bounding box of non-transparent pixels
    const { width, height } = image.bitmap;
    let minX = width, minY = height, maxX = 0, maxY = 0;
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            if (image.bitmap.data[idx + 3] > 10) { // Not fully transparent
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }
    
    if (maxX <= minX || maxY <= minY) return image;
    
    return image.crop({ x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 });
}

async function removeWhiteBackground(image) {
    const { width, height } = image.bitmap;
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const r = image.bitmap.data[idx];
            const g = image.bitmap.data[idx + 1];
            const b = image.bitmap.data[idx + 2];
            const a = image.bitmap.data[idx + 3];
            
            if (a > 0) {
                // Remove white/near-white pixels (background)
                if (r > 235 && g > 235 && b > 235) {
                    image.bitmap.data[idx + 3] = 0;
                }
                // Remove light gray pixels (paper doll tab edges)
                else if (r > 180 && g > 180 && b > 180 && Math.abs(r - g) < 15 && Math.abs(g - b) < 15) {
                    // Only if surrounded by other light pixels (to avoid removing clothing details)
                    let lightNeighbors = 0;
                    for (let dy = -2; dy <= 2; dy++) {
                        for (let dx = -2; dx <= 2; dx++) {
                            const nx = x + dx, ny = y + dy;
                            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                                const nidx = (ny * width + nx) * 4;
                                const nr = image.bitmap.data[nidx];
                                const ng = image.bitmap.data[nidx + 1];
                                const nb = image.bitmap.data[nidx + 2];
                                if (nr > 200 && ng > 200 && nb > 200) lightNeighbors++;
                            }
                        }
                    }
                    if (lightNeighbors > 15) {
                        image.bitmap.data[idx + 3] = 0;
                    }
                }
            }
        }
    }
    
    return image;
}

async function processOutfit(outfit) {
    const filePath = path.join(TARGET_DIR, outfit.base + '.png');
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${outfit.base}.png no existe, saltando...`);
        return;
    }

    try {
        const image = await Jimp.read(filePath);
        const w = image.bitmap.width;
        const h = image.bitmap.height;
        
        console.log(`\n🔧 Procesando ${outfit.name} (${w}x${h})...`);

        // --- BODY (ropa) ---
        const br = outfit.bodyRect;
        const bodyX = Math.floor(w * br.x);
        const bodyY = Math.floor(h * br.y);
        const bodyW = Math.floor(w * br.wPct);
        const bodyH = Math.floor(h * br.hPct);
        
        let body = image.clone().crop({ x: bodyX, y: bodyY, w: bodyW, h: bodyH });
        body = await removeWhiteBackground(body);
        body = await trimTransparent(body);
        
        const bodyPath = path.join(TARGET_DIR, outfit.base + '_body.png');
        await body.write(bodyPath);
        console.log(`  ✅ Cuerpo: ${body.bitmap.width}x${body.bitmap.height}px`);

        // --- ACCESSORY ---
        if (outfit.accRect) {
            const ar = outfit.accRect;
            const accX = Math.floor(w * ar.x);
            const accY = Math.floor(h * ar.y);
            const accW = Math.floor(w * ar.wPct);
            const accH = Math.floor(h * ar.hPct);
            
            let acc = image.clone().crop({ x: accX, y: accY, w: accW, h: accH });
            acc = await removeWhiteBackground(acc);
            acc = await trimTransparent(acc);
            
            const accPath = path.join(TARGET_DIR, outfit.base + '_acc.png');
            await acc.write(accPath);
            console.log(`  ✅ Accesorio: ${acc.bitmap.width}x${acc.bitmap.height}px`);
        } else {
            console.log(`  ℹ️  Sin accesorio separado para ${outfit.name}`);
        }

    } catch (err) {
        console.error(`  ❌ Error procesando ${outfit.base}:`, err.message);
    }
}

async function main() {
    console.log('🎨 Procesamiento inteligente de outfits de niño');
    console.log('='.repeat(50));
    
    for (const o of OUTFITS) {
        await processOutfit(o);
    }
    
    console.log('\n✨ ¡Procesamiento completado!');
}

main();
