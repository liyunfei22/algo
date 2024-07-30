# algo

## Commit Message 规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范来格式化 commit messages。每个 commit message 应该遵循以下格式：

## 发布 npm 包

要发布您的 npm 包，您需要遵循以下步骤：

1. 在命令行中登录到您的 npm 账户：

   ```
   npm login
   ```

   按提示输入您的用户名、密码和邮箱。

2. 更新版本号：
   使用以下命令之一来更新 package.json 中的版本号：

   ```
   npm version patch  # 用于小的 bug 修复
   npm version minor  # 用于添加向后兼容的功能
   npm version major  # 用于不兼容的更改
   ```

3. 发布包：

   ```shell
   npm publish
   ```

   如果这是您第一次发布这个包，并且包名是作用域包（例如 @yourname/package-name），您需要添加 --access public 标志：

   ```shell
   npm publish --access public
   ```

4. 验证发布：
   发布后，您可以在 npm 网站上检查您的包是否已经成功发布。

5. 更新 CHANGELOG.md：
   记得更新您的 CHANGELOG.md 文件，记录这个新版本的变更。
