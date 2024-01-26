<h1 align="center">⚠️ <a href="https://warning.wtf">warning.wtf</a> ⚠️ </h1>

Every day, we developers see dozens of warnings and choose to ignore them (or do we have a choice?).

This started as a random [~~tweet~~ X](https://twitter.com/_pi0_/status/1750958827359351155) but then I thought, if we don't
don't do anything, would it be an eternal fight between library authors that care to add those warning lines and developers that
either ignore them or have no choice but to ignore them. And we love to know why. And who is to point fingers to?

## 👉 Have you come from a console warning here?

We love to hear your opinion. Please share them [in this discussion](https://github.com/pi0/warning.wtf/discussions/1).

And sorry for sorry for disturbing you. You can disable this if you want just set `NO_WTF_WARN` environment variable or put this in your code

```js
globalThis.NO_WTF_WARN = true;
```

## 🧙 How to ~~shame~~use?

```js
// Dynamic import
// Works in both CJS and ESM
import("warntf/setup");

// ESM
import "warntf/setup";

// CJS
require("warntf/setup");
```

## ❓ How it works

When `warntf/setup` is imported, we hook to `console.warn` calls from any library, and after every 5 warnings by default, we show this warning.

<img width="621" alt="image" src="https://github.com/pi0/warning.wtf/assets/5158436/927d402a-cd5a-4539-b210-f495200269a7">

## ⚙️ Configuration

There is not much but there are two:

- `NO_WTF_WARN` environment variable or global constant to disable this
- `WTF_WARN_FREQ` environment variable or global constant to set frequency (default is `5`)

## 🙌 Join the effort!

Do you have ideas to improve this project or how else we can approach it?

Use [issues](https://github.com/pi0/warning.wtf/issues) or [discussions](https://github.com/pi0/warning.wtf/discussions) to join the crew!

![we are hiring meme](https://media.makeameme.org/created/were-hiring-n9g2al.jpg)

## Development

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Test with `pnpm play`

## License

Made with 💛 Published under [MIT License](./LICENSE).
