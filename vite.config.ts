import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sassPlugin } from 'esbuild-sass-plugin';
import dotenv from 'dotenv';
import path from 'path'; // Importar o módulo path do Node.js

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: `.env.${mode}` }).parsed;
  const envParsed = Object.keys(env).reduce((acc, key) => {
    acc[`import.meta.env.${key}`] = JSON.stringify(env[key]);
    return acc;
  }, {});

  return {
    plugins: [react(), sassPlugin()], 
    define: envParsed,
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'), 
        // Adicionar o alias para o Bootstrap
      },
    },
  };
});
