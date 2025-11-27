import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const src = path.join(process.cwd(), 'resources', 'icon.png');
const destPngDir = path.join(process.cwd(), 'resources', 'icon-variants');
const destIco = path.join(process.cwd(), 'resources', 'icon.ico');

async function run() {
  if (!fs.existsSync(src)) {
    console.error(`源图标不存在: ${src}`);
    process.exit(1);
  }
  fs.mkdirSync(destPngDir, { recursive: true });
  const sizes = [16, 24, 32, 48, 64, 128, 256, 512];
  const pngBuffers = [];
  for (const size of sizes) {
    const outPath = path.join(destPngDir, `icon-${size}.png`);
    const buf = await sharp(src).resize(size, size, { fit: 'contain' }).png().toBuffer();
    fs.writeFileSync(outPath, buf);
    if (size <= 256) pngBuffers.push(buf); // ICO supports up to 256
  }
  const ico = await pngToIco(pngBuffers);
  fs.writeFileSync(destIco, ico);
  console.log(`生成 ICO: ${destIco}（多尺寸：${sizes.join(', ')}）`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
