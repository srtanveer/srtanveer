const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const inputImage = path.join(process.cwd(), 'public', 'profile-photo.jpg');
  const publicDir = path.join(process.cwd(), 'public');

  // Create favicon.ico (16x16 and 32x32)
  await sharp(inputImage)
    .resize(32, 32)
    .toFile(path.join(publicDir, 'icon.png'));

  // Create apple-icon.png (180x180)
  await sharp(inputImage)
    .resize(180, 180)
    .toFile(path.join(publicDir, 'apple-icon.png'));

  console.log('Favicon files generated successfully!');
}

generateFavicons().catch(console.error); 