const { Jimp } = require('jimp');
const path = require('path');

async function createSquareLogo() {
  try {
    // Read the original logo
    const logo = await Jimp.read(path.join(__dirname, '../public/images/logo.png'));

    // Get original dimensions
    const originalWidth = logo.width;
    const originalHeight = logo.height;

    console.log(`Original logo size: ${originalWidth}x${originalHeight}`);

    // Create a square canvas (512x512) with white background
    const size = 512;
    const canvas = new Jimp({ width: size, height: size, color: 0xFFFFFFFF }); // White background

    // Calculate scaling to fit logo within the canvas while maintaining aspect ratio
    const maxLogoSize = size * 0.7; // Use 70% of canvas for logo, leave 15% padding on each side
    const scale = Math.min(maxLogoSize / originalWidth, maxLogoSize / originalHeight);

    // Resize logo proportionally
    const scaledWidth = Math.round(originalWidth * scale);
    const scaledHeight = Math.round(originalHeight * scale);
    logo.resize({ w: scaledWidth, h: scaledHeight });

    // Center the logo on the canvas
    const x = Math.round((size - scaledWidth) / 2);
    const y = Math.round((size - scaledHeight) / 2);

    // Composite the logo onto the canvas
    canvas.composite(logo, x, y);

    // Save the square logo
    const outputPath = path.join(__dirname, '../public/logo-square.png');
    await canvas.write(outputPath);

    console.log(`Square logo created: ${outputPath}`);
    console.log(`Dimensions: ${size}x${size}`);
    console.log(`Logo size on canvas: ${scaledWidth}x${scaledHeight}`);

  } catch (error) {
    console.error('Error creating square logo:', error);
    process.exit(1);
  }
}

createSquareLogo();
