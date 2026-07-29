import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definindo os dois caminhos principais
const inputDir = path.join(__dirname, 'raw_images');
const outputDir = path.join(__dirname, 'public', 'images');

// Todas as "gavetas" que o seu processador de imagens precisa na raw_images
const pastas = [
    'hero', 'logo', 'sobre',
    'tratamento-01', 'tratamento-02', 'tratamento-03', 'tratamento-04', 'tratamento-05',
    'antes-01', 'depois-01', 'antes-02', 'depois-02', 'antes-03', 'depois-03',
    'produto-01', 'produto-02', 'produto-03',
    'insta-01', 'insta-02', 'insta-03', 'insta-04'
];

// 1. Criando as subpastas em raw_images com .gitkeep
if (!fs.existsSync(inputDir)) fs.mkdirSync(inputDir, { recursive: true });

pastas.forEach(pasta => {
    const caminho = path.join(inputDir, pasta);
    if (!fs.existsSync(caminho)) fs.mkdirSync(caminho, { recursive: true });
    
    fs.writeFileSync(path.join(caminho, '.gitkeep'), '');
});

// 2. Criando a pasta principal public/images com .gitkeep
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, '.gitkeep'), '');

console.log('✅ Estrutura completa recriada! Pastas raw_images e public/images estão seguras para o GitHub.');