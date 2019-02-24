import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

const production = process.env.BUILD === 'production';

const config = {
  'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development'),
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
    production && uglify(),
  ],
};
