import { defineConfig, presetUno, type Preset } from 'unocss';


const testPreset = () : Preset => ({
  name: 'unocss-preset-test',
  rules: [[/^test$/, () => `
  .test {
    @apply bg-red;
    @supports (color: color-mix(in oklab, black, black)) {
      background: green;
    }
  }
  `]]
});


export default defineConfig({
  presets: [presetUno(), testPreset()]
});
