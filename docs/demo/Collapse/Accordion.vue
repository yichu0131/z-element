<script setup lang="ts">
import { ref } from 'vue'
const collapseVal = ref([])

</script>

<template>
      <VKCollapse v-model="collapseVal" accordion>
        <VKCollapseItem name="a" title="标题一">
          <template #title>第一标题 <> </template>
          <h1>第一章</h1>
          <p>这是段落11111111111111111</p>
        </VKCollapseItem>

        <VKCollapseItem name="b" title="标题二">
          床前明月光，疑是地上霜。举头望明月，低头思故乡。
        </VKCollapseItem>
      </VKCollapse>
</template>
