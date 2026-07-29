import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputDir = path.join(__dirname, 'raw_images');

// Todas as "gavetas" que o seu processador de imagens precisa
const pastas = [
    'hero', 'logo', 'sobre',
    'tratamento-01', 'tratamento-02', 'tratamento-03', 'tratamento-04', 'tratamento-05',
    'antes-01', 'depois-01', 'antes-02', 'depois-02', 'antes-03', 'depois-03',
    'produto-01', 'produto-02', 'produto-03',
    'insta-01', 'insta-02', 'insta-03', 'insta-04'
];

if (!fs.existsSync(inputDir)) fs.mkdirSync(inputDir, { recursive: true });

pastas.forEach(pasta => {
    const caminho = path.join(inputDir, pasta);
    if (!fs.existsSync(caminho)) fs.mkdirSync(caminho, { recursive: true });
    
    // Cria o "peso de porta" para o Git salvar a pasta vazia
    fs.writeFileSync(path.join(caminho, '.gitkeep'), '');
});

console.log('✅ Estrutura de pastas recriada! O Template já pode subir para o GitHub.');