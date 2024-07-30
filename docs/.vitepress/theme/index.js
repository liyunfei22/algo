import DefaultTheme from 'vitepress/theme';
import MathDemo from './MathDemo.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MathDemo', MathDemo);
  },
};
