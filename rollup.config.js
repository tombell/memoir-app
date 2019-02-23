import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'public/app.min.js',
    format: 'iife',
    sourcemap: true,
  },
  treeshake: true,
  plugins: [
    commonjs(),
    resolve(),
    typescript(),
  ],
};
