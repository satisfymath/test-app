const fs = require('fs');
const path = require('path');

function generateJSONFromImages(categories) {
  const data = {};

  categories.forEach(category => {
    const folderPath = path.join(__dirname, 'src', category);
    if (fs.existsSync(folderPath)) {
      const images = fs.readdirSync(folderPath).filter(file => file.endsWith('.png'));

      data[category] = images.reduce((acc, image, index) => {
        // Extrae el nombre del archivo sin la extensión
        const title = path.parse(image).name;
        acc[title] = {
          title: title,
          price: (index + 1) * 10, // Precio fijo de 10 multiplicado por el índice + 1
          description: `This is the description for ${title}`,
          image: `${category}/${image}`.replace(/\\/g, '/')
        };
        return acc;
      }, {});
    } else {
      console.warn(`Folder not found: ${folderPath}`);
    }
  });

  const jsonOutput = JSON.stringify(data, null, 2);

  fs.writeFileSync(path.join(__dirname, 'output.json'), jsonOutput, 'utf8');
  console.log('JSON file has been generated successfully!');
}

// Uso: Lee la lista de categorías desde un archivo JSON
const configPath = path.join(__dirname, 'categories.json');
if (!fs.existsSync(configPath)) {
  console.error('Configuration file not found: categories.json');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
generateJSONFromImages(config.categories);
