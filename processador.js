import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Configuração necessária para o Node moderno (ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos do sistema
const inputDir = path.join(__dirname, 'raw_images');
const outputDir = path.join(__dirname, 'public', 'images');

// Configurações de tamanho e corte para as nossas "gavetas"
const imageConfigs = {
    'hero': { width: 1920, height: 1080, fit: 'cover' },
    'logo': { width: 500, height: null, fit: 'contain' }, 
    'sobre': { width: 600, height: 600, fit: 'cover' },
    
    // Tratamentos
    'tratamento-01': { width: 800, height: 800, fit: 'cover' },
    'tratamento-02': { width: 800, height: 800, fit: 'cover' },
    'tratamento-03': { width: 800, height: 800, fit: 'cover' },
    'tratamento-04': { width: 800, height: 800, fit: 'cover' },
    'tratamento-05': { width: 800, height: 800, fit: 'cover' },

    // Antes e Depois
    'antes-01': { width: 800, height: 800, fit: 'cover' },
    'depois-01': { width: 800, height: 800, fit: 'cover' },
    'antes-02': { width: 800, height: 800, fit: 'cover' },
    'depois-02': { width: 800, height: 800, fit: 'cover' },
    'antes-03': { width: 800, height: 800, fit: 'cover' },
    'depois-03': { width: 800, height: 800, fit: 'cover' },

    // Produtos
    'produto-01': { width: 600, height: 600, fit: 'contain' },
    'produto-02': { width: 600, height: 600, fit: 'contain' },
    'produto-03': { width: 600, height: 600, fit: 'contain' }
};

async function automatizarImagens() {
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
    
    if (!fs.existsSync(inputDir)) {
        console.error('❌ Crie a pasta "raw_images" na raiz do projeto!');
        return;
    }

    const pastas = fs.readdirSync(inputDir);
    let imagensProcessadas = 0;

    for (const pasta of pastas) {
        const caminhoPasta = path.join(inputDir, pasta);
        if (!fs.statSync(caminhoPasta).isDirectory()) continue;

        const arquivos = fs.readdirSync(caminhoPasta).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
        if (arquivos.length === 0) continue;

        const arquivoParaProcessar = arquivos[0];
        const caminhoInput = path.join(caminhoPasta, arquivoParaProcessar);
        const caminhoOutput = path.join(outputDir, `${pasta}.webp`);
        const config = imageConfigs[pasta] || {}; 

        try {
            let transform = sharp(caminhoInput);

            if (config.width || config.height) {
                transform = transform.resize(config.width, config.height, { 
                    fit: config.fit || 'cover',
                    withoutEnlargement: true 
                });
            }
            
            await transform.webp({ quality: 80 }).toFile(caminhoOutput);
            console.log(`✅ Sucesso: '${arquivoParaProcessar}' -> ${pasta}.webp`);
            imagensProcessadas++;
            
        } catch (error) {
            console.error(`❌ Erro em '${pasta}':`, error.message);
        }
    }

    console.log(`\n🚀 Automação concluída! ${imagensProcessadas} imagem(ns) processada(s) e enviada(s) para public/images/.`);
}

automatizarImagens();