module.exports = {
  presets: [
    ['@babel/preset-env', { targets: '> 0.25%, not dead' }],
    '@babel/preset-typescript' // 如果使用 TypeScript
  ],
  // 可以根据需要添加插件
  plugins: []
};