# myVueUI
[![Build Status](https://travis-ci.org/findpikachu/myVueUI.svg?branch=master)](https://travis-ci.org/findpikachu/myVueUI)

## 介绍
这是我在学习vue时制作的一个ui框架

## 开始使用
1.添加 CSS 样式
使用本框架前，请在 CSS 中开启 border-box
```
*,*::before,*::after{box-sizing: border-box;}
```
IE 8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会改为 CSS 变量）
```
  :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
```
IE 15 及以上浏览器都支持此样式。
2.安装
```
npm i myvueui1
```
3. 引入 myvueui1
```
import {Button, ButtonGroup, Icon} from 'myvueui1'
import 'myvueui1/dist/index.css'
export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
```
4. 引入 svg symbols
```
  <script src="//at.alicdn.com/t/font_718972_1hhoomwpb69.js"></script>
```

## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码



