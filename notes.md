## 学习笔记

- 腾讯视频首屏网页采取Nodejs做服务端优化：1. 需要做搜索引擎优化和首屏加载优化。2. 服务端渲染时，前后端同构可以复用代码。采用nodejs更合理。
- 在nodejs中，如果一个reject的promise后面没有跟上catch方法，则异常会抛到全局中。
- then/catch函数会返回一个新的promise对象，如果then/catch函数的callback里面有异常，那么其返回的promise就是reject状态，否则还是resolve状态。
- 如果then函数的callback返回一个promise，那么then函数的promise会与这个新promise的状态保持一致。这样就可以实现then的链式调用，来模拟顺序执行的一系列操作。
- async其实一个返回promise的语法糖，promise的状态取决于函数是正常return还是抛出异常。