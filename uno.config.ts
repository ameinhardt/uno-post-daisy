import { defineConfig, presetUno, type Preset } from 'unocss';


const testPreset = () : Preset => ({
  name: 'unocss-preset-test',
  rules: [[/^test$/, () => ``]]
});


export default defineConfig({
  presets: [presetUno(), testPreset()]
});
