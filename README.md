# micromodule
Messing around with micro packages, build &amp; test scripts, and React. This repo ideally will turn into a Yeoman generator.

The focus of this project is to make a small, simple scaffolding for developing dumb leaf React components. It should be self-tested and have distributable builds. 

This is really a development workflow study where I am applying some ideas from microservice patterns to make my frontend application architecture more modular, safe, and distributable.

# Usage

```bash
npm i
npm start
```

# Testing

Testing React components is confusing and generally sucks. The API keeps changing and it's hard to make sense out of the resources out there. I tried using react's TestUtils but I couldn't even make any practical use of them. Weak. Turns out I didn't really need them anyway, at least for this basic example. I got some pretty easy-to-write and understandable tests for a simple React component in the test/components folder. I'm using jsdom (and mocha-jsdom as a thin bootstrapping layer for less verbose test script) to mock a DOM to render the React components into. Then I'm just using ReactDOM for rendering the component, using ref's inside of the components to access the inner elements in the test script, and otherwise just using standard DOM api to check rendered stuff.

If I need more robust testing, the [react-test-tree](https://github.com/QubitProducts/react-test-tree) project looks very interesting. Trying to stay lightweight here though.

# Task Running

I'm going to do everything I can without using Gulp. I think gulp is often an unnecessary abstraction, dependency bloat, and ultimately doesn't really ever make development fast for me. If I come across a task that requires gulp, or I find it might be more useful to do something gulp, then I'll use it. Until then, not interested; default task runner will be NPM.

# Linting

I really want to use Standard for linting, but it's unbearable to use because of [this issue](https://github.com/feross/standard/issues/346). Instead, I'm using eslint-plugin-standard as a plugin for the linting rule set, and performing linting via eslint. I'm also using eslint-plugin-react for react-related rules, and I'm using babel-eslint to parse the linted code with Babel. So since I'm basically using the untouched Standard ruleset, I think its safe to use this badge -

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

I jacked the .eslintrc from [here](https://gist.github.com/nkbt/9efd4facb391edbf8048) just to have a document with most rules ready to uncomment if need be in the future, while I'm still deciding what linting options work well for me.

`npm run lint` will run `eslint` with `--fix` flag, eslint will try to autofix any errors. `npm test` will run the lint task via `pretest` script.

# Bundling & building

Webpack.

# Publishing

When I get Sinopia up on my server for managing "internal" packages, I'll have to add this config to `package.json` prevent accidentally publishing to real npm:

```json
  "publishConfig": {
    "registry": "http://my.sinopia.address:4873/"
  },
```

Additionally, to set the default registry (for installing internal packages) I can add an `.npmrc` file containing a line with this text:
```
registry = http://my.sinopia.address:4873/
```

# Future

- basic webpack dev server
- automate everything
- prepublish testing