---
title: 开始
description: 快速安装和使用Z-Elements
---

# 快速开始
本节将会介绍如何安装使用Z-Elements。

## 安装Z-Elements
使用pnpm安装
```bash
pnpm install @yichu0131/z-element
```

## 安装第三方库
### 引入图标库
```bash
pnpm i --save @fortawesome/fontawesome-svg-core
pnpm i --save @fortawesome/free-solid-svg-icons
pnpm i --save @fortawesome/vue-fontawesome@latest-3
```
### 引入校验库
```bash
pnpm i async-validator
```
### 引入popper
```bash
pnpm install @popperjs/core
```

## 基础用法
组件的引入可以使用按需引入，也可以使用全部引入。

### 全部引入
如果你不在乎引入包的大小，便可以使用全部引入
```ts
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VElement from '@yichu0131/z-element'
import '@yichu0131/z-element/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

createApp(App)
.use(VElement)
.mount('#app')
```
```ts
// vue页面
<template>
 <vk-button>按钮</vk-button>
</template>
```
### 按需导入
```ts
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import Button from '@yichu0131/z-element'
import '@yichu0131/z-element/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

createApp(App)
.use(Button)
.mount('#app')

```
```ts
// vue页面
<template>
 <vk-button>按钮</vk-button>
</template>
```
### 手动导入
```ts
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import '@yichu0131/z-element/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

createApp(App).mount('#app')
```
```ts
// vue页面
<template>
 <Button>按钮</Button>
</template>

<script setup lang="ts">
import { Button } from '@yichu0131/z-element'
</script>
```

