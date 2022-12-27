import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";
import transformerDirectives from '@unocss/transformer-directives'

import {
  defineConfig,
  presetAttributify,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerAttributifyJsx(), 
    transformerDirectives(),
  ],
});
