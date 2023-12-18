
# TUTORIALS \_\_ SETUP


## Setup

1. start project by Nextjs __ use TypeScript, tailwindcss
2. setup & fine tune
    - layout
    - ESLint
    - Store by Redux Toolkit, Redux Saga, ...
    - add some utils, UI libraries
3. read requirements and start coding

## Structure

```

----------------------        ----------------------
|                    |    →	  |                    |
|        View        |        |       Store        |
|                    |    ←   |                    |
----------------------        ----------------------

```


There are three main parts: store, view and shared.
- **store**: follow its own structure, depends on State Management library.
- **shared**: contains all stuff that is reusable, and standalone. (after that, can develop it to separate packages)
- **view**: Focus Here!
Make it simple for scalable applications. (the best is split into as many various independent of business logic that can reuse as possible)


## Troubleshooting

- **nvm**: allows you to easily use desired version of Node.js that be compatible with Nextjs verison



## References

- [Clean code](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29)
