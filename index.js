var path = require('path')
var directoryPath =path.resolve(__dirname).split('/node_modules')[0];
console.log("🚀 ~ file: index.js:3 ~ directoryPath:", directoryPath)

module.exports = plop => {
  plop.setGenerator('pages', { // 这里的wxfile是一个自己设定的名字，在执行命令行的时候会用到
    description: 'create the repeat pages', // 这里是对这个plop的功能描述
    prompts: [{
      type: 'input', // 问题的类型
      name: 'fileName', // 问题对应得到答案的变量名，可以在actions中使用该变量
      message: 'your fileName is', // 在命令行中的问题
      default: 'page' // 问题的默认答案
    }],
    actions: [{
      type: 'add', // 操作类型，这里是添加文件
      path: directoryPath + '/{{fileName}}.js', // 添加的文件的路径
      templateFile: 'plop-temp/temp.js' // 模板文件的路径
    }]
  })

  plop.setGenerator('pages1', { // 这里的wxfile是一个自己设定的名字，在执行命令行的时候会用到
    description: 'create the repeat pages', // 这里是对这个plop的功能描述
    prompts: [{
      type: 'input', // 问题的类型
      name: 'fileName', // 问题对应得到答案的变量名，可以在actions中使用该变量
      message: 'your fileName is', // 在命令行中的问题
      default: 'page' // 问题的默认答案
    }],
    actions: [{
      type: 'add', // 操作类型，这里是添加文件
      path: directoryPath + '/{{fileName}}.js', // 添加的文件的路径
      templateFile: 'plop-temp/temp1.js' // 模板文件的路径
    }]
  })

  plop.setGenerator('pages2', { // 这里的wxfile是一个自己设定的名字，在执行命令行的时候会用到
    description: 'create the repeat pages', // 这里是对这个plop的功能描述
    prompts: [{
      type: 'input', // 问题的类型
      name: 'fileName', // 问题对应得到答案的变量名，可以在actions中使用该变量
      message: 'your fileName is', // 在命令行中的问题
      default: 'page' // 问题的默认答案
    }],
    actions: [{
        type: 'add', // 操作类型，这里是添加文件
        path: directoryPath + '/src/pages/{{fileName}}/index.js', // 添加的文件的路径
        templateFile: 'plop-temp/pages/index.js' // 模板文件的路径
      },
      {
        type: 'add',
        path: directoryPath + '/src/pages/{{fileName}}/index.wxml',
        templateFile: 'plop-temp/pages/index.wxml'
      },
      {
        type: 'add',
        path: directoryPath + '/src/pages/{{fileName}}/index.json',
        templateFile: 'plop-temp/pages/index.json'
      },
      {
        type: 'add',
        path: directoryPath + '/src/pages/{{fileName}}/index.css',
        templateFile: 'plop-temp/pages/index.css'
      },
    ]
  })
}