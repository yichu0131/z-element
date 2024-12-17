<script setup lang="ts">
import { ref } from 'vue'
const collapseVal = ref([''])

</script>

<template>
      <VKCollapse v-model="collapseVal">
        <VKCollapseItem name="a">
          <template #title>标题一</template>
          <h3>第一章</h3>
          <p>这是段落11111111111111111</p>
        </VKCollapseItem>

        <VKCollapseItem name="b" title="标题二">
          床前明月光，疑是地上霜。举头望明月，低头思故乡。
        </VKCollapseItem>
      </VKCollapse>
</template>