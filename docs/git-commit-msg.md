# CONVENTION \_\_ Git Commit Messages

## Summary

Format: `<type> (<scope>): <subject>`

`<scope>` is optional

### The structural elements

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

`<scope>`: put the ticket number to _scope_ if we have

## Examples

- feat (AA-105 categories): allow provided config object to extend other configs
- test: udpate snap
- chore: clean up useless attr

## 📌 Notice:

MRs shall be **squash merged**, so the commits in the same MR can be similar.
Just notice the last commit message when using squash.

## References:

- https://www.conventionalcommits.org/
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
