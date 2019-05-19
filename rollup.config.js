import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import { uglify } from 'rollup-plugin-uglify';

const production = process.env.BUILD === 'production';

const config = {
  'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development'),
  'MEMOIR_API_URL': JSON.stringify(production ? 'https://api.iamdjriff.co.uk' : 'http://localhost:8080'),
};

export default {
  input: 'src/index.tsx',
  output: {
    file: 'public/app.min.js',
    format: 'iife',
    sourcemap: true,
  },
  treeshake: true,
  watch: {
    clearScreen: false,
  },
  plugins: [
    commonjs(),
    resolve(),
    replace(config),
    typescript(),
    !production && serve('public'),
    production && uglify(),
  ],
};
