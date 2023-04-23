```
$ mkdir plop_tbtest
$ cd plop_tbtest
$ npm init -y

```

```
plop pages
plop pages1
plop pages2

```

```
  <!-- "scripts": {
    "plop": "plop",
  }, -->

  "scripts": {
    "plop": "plop --plopfile ./node_modules/plop_tbtest/index.js"
  },
```

```
npm get registry
npm config set registry https://registry.npmjs.org/

npm login --registry=https://npm.pkg.github.com --scope=@y-zhiyu
yarn publish -registry=https://npm.pkg.github.com
npm install  plop_tbtest

// 运行
npm run plop

```

