# vue-qiankun

## 介绍

基于vue-cli + vue-router + qiandun搭建主应用与子应用demo。

- 主应用目录：main-app
- 子应用目录：sub-app-vue

## 安装

```bash
git clone https://github.com/faganer/vue-qiankun.git
```

设置淘宝npm源：

```bash
npm config set registry http://registry.npm.taobao.org/
```

安装依赖：

```bash
cd main-app
npm install
cd ../sub-app-vue
npm install
cd ../
```

运行主应用：

```bash
cd main-app
npm run serve
```

运行子应用：

```bash
cd sub-app-vue
npm run serve
```

访问：http://localhost:8080/

## 参考资料

- https://www.imooc.com/article/304768
- https://zhuanlan.zhihu.com/p/196428171
- https://qiankun.umijs.org/zh/guide
