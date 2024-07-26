import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const config = {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'es'
  },
  plugins: [
    commonjs(),
    babel({ babelHelpers: 'bundled' })
  ]
};

export default config;