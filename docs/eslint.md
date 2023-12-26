# GUIDE \_\_ ESLint

to ensure consistency among team members.

```
ESLint: catching problems (bugs or format...)
↳ Prettier: auto format
↳ Husky : checking code before commit
↳ lint-staged: only for the changed files.
```

## What should we do

we already configure in project.
You need enable husky on your side and get some plugin support VSCode (or your editor)

- run `npx husky install .config/husky` to enable husky.
- install two extensions: ESLint and Prettier for VSCode.
- VSCode: open settings and update **defaultFormatter**

In case we want to skip checking

```
git commit -m "skipping hooks" --no-verify
```

# Prettier

- sort order: base layer - components layer - utilities layer
- prettier-plugin-tailwindcss, → no need, auto with prettier 3.

# Q&A

Sometimes, we don't add `.prettierrc.json`
→ because we use all default of Prettier, no modification.
