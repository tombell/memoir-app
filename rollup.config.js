import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const production = process.env.BUILD === 'production';

const config = {
  'MEMOIR_API_URL': JSON.stringify(production ? 'https://api.iamdjriff.co.uk' : 'http://localhost:8080'),
  'MEMOIR_CDN_URL': JSON.stringify('https://d2a0hkcquufay7.cloudfront.net'),
};

export default {
  input: 'src/index.tsx',
  output: {
    file: 'public/app.js',
    format: 'iife',
    sourcemap: true,
  },
  treeshake: true,
  plugins: [
    commonjs(),
    resolve(),
    replace(config),
    typescript(),
    !production && serve({ contentBase: 'public', historyApiFallback: true }),
    production && terser(),
  ],
};
