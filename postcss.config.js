import UnoCSS from '@unocss/postcss';
import Nested from 'postcss-nested';

export default {
  plugins: [
    Nested,
    UnoCSS()
  ]
};
