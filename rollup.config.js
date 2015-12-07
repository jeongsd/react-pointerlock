import { rollup } from 'rollup';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: './src/react-pointerlock.js',
  dest: 'dist/react-pointerlock.js',
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      presets: [
        'es2015-rollup',
        'react',
      ],
      plugins: [
        'transform-object-rest-spread',
      ],
    }),
    npm({
      jsnext: true,
      skip: [
        'react',
      ],
    }),
    commonjs({}),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
