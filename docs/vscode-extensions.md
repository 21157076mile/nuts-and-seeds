# CONVENTION \_\_ VSCode Extensions

- run `npx husky install .config/husky` to enable husky.
- install two extensions: ESLint and Prettier.
- open **Settings**:
  - update **defaultFormatter** → `Prettier - Code formatter`
  - check **Format On Save**

## References

### Essential

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Recommended

- [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- An AI Assistant, like Copilot, TabNine, Kite, ...

### Auto supported by VSCode
- Bracket Pair Color - This functionality is now [built-in](https://code.visualstudio.com/blogs/2021/09/29/bracket-pair-colorization) to VS Code. Configure these settings to use this functionality
  ↳ Bracket Pair colorizing: `@id:editor.bracketPairColorization.enabled @id:editor.guides.bracketPairs`

### Some useful command in Command Palette (`Cmd+Shift+P`)

- `code` → Shell Command: Install 'code' command in PATH command.
- `auto` → ESLint: Fix all auto-fixable Problems.
