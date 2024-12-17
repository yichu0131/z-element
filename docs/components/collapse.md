---
title: Collapse | Z-Elements
description: Collapse 组件文档
---

# Collapse折叠面板
通过折叠面板收纳内容区域

## 基础用法
可同时展开多个面板，面板之间不影响
<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse组件基础用法"></preview>

## 手风琴效果
每次只能展开一个面板
通过 accordion 属性来设置是否以手风琴模式显示。
<preview path="../demo/Collapse/Accordion.vue" title="手风琴用法" description="Collapse组件手风琴用法"></preview>
## 自定义面板标题与内容
除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题与内容
<preview path="../demo/Collapse/Custom.vue" title="自定义" description="Collapse组件自定义用法"></preview>

## Collapse API
### Collapse Attributes
| 属性名                  | 详情          | 类型              | 默认值   |
|----------------------|-------------|-----------------|-------|
| modelValue / v-model | 折叠屏展开项的name | string 或 number | []    |
| accordion            | 是否手风琴模式     | boolean         | false |

### Collapse Events
| 事件名               | 详情      | 类型       |
|-------------------|---------|----------|
| update:modelValue | 点击后更新值  | function |
| change            | 折叠屏发生变化 | function |

### Collapse Slots
| 插槽名     | Description | 子标签           |
|---------|-------------|---------------|
| default | 自定义默认内容     | Collapse Item |

## CollapseItem API
### CollapseItem Attributes
| 属性名      | 说明                | 类型               | 默认值   |
|----------|-------------------|------------------|-------|
| name     | 名称，用于绑定modelValue | string 或 number  | " "  |
| title    | 标题                | string           | " "   |
| disabled | 不可点击              | boolean          | false |

### Collapse Item Slot
| 插槽名     | 说明                | Type |
|---------|-------------------|------|
| default | Collapse Item 的内容 | —    |
| title   | Collapse Item 的标题 | —    |
