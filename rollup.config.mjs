import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const packageName = 'utils';
const isProduction = !process.env.ROLLUP_WATCH;

const baseConfig = {
  input: 'src/index.ts',
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    json(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
    }),
  ],
};

export default [
  // Production builds
  {
    ...baseConfig,
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: packageName,
        globals: {
          // 如果你的库依赖其他全局变量，在这里定义它们
        },
      },
    ],
    plugins: [...baseConfig.plugins, isProduction && terser()].filter(Boolean),
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  // Development build
  !isProduction && {
    ...baseConfig,
    output: {
      file: 'dev/bundle.js',
      format: 'iife',
      name: packageName,
      sourcemap: true,
    },
    plugins: [
      ...baseConfig.plugins,
      serve({
        open: true,
        contentBase: ['dev', 'dist'],
        port: 3000,
      }),
      livereload('dev'),
    ],
  },
].filter(Boolean);
