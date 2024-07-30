import path from 'path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RollupTs',
  description: 'A TypeScript-based utility library',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'API',
        items: [{ text: 'Math Functions', link: '/api/math' }],
      },
    ],
  },
  vite: {
    resolve: {
      alias: {
        '@redarsenal/rollup-ts': path.resolve(__dirname, '../../src/index.ts')
      }
    }
  }

});
