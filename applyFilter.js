const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directorios de entrada y salida
const inputDir = path.join(__dirname, 'public', 'educaciones');
const outputDir = path.join(__dirname, 'imagenesfiltered');

// Asegúrate de que el directorio de salida exista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Función para procesar las imágenes
const processImages = async () => {
  fs.readdir(inputDir, (err, files) => {
    if (err) {
      console.error('Error al leer el directorio:', err);
      return;
    }

    files.forEach(async (file) => {
      const filePath = path.join(inputDir, file);
      const outputFilePath = path.join(outputDir, file);

      try {
        await sharp(filePath)
          .blur(5) // Aplica el filtro gaussiano
          .jpeg({ quality: 50 }) // Ajusta la calidad (50%)
          .toFile(outputFilePath);
        console.log(`Imagen procesada: ${file}`);
      } catch (err) {
        console.error('Error al procesar la imagen:', err);
      }
    });
  });
};

// Ejecutar la función
processImages();
