<script setup lang="ts">
import { ref } from 'vue'
const collapseVal = ref(['a'])

</script>

<template>
      <VKCollapse v-model="collapseVal">
        <VKCollapseItem name="a" title="标题一">
          这是一个简短的第一段内容
        </VKCollapseItem>

        <VKCollapseItem name="b" title="标题二">
          床前明月光，疑是地上霜。举头望明月，低头思故乡。
        </VKCollapseItem>
      </VKCollapse>
      <br>
      <br>
      <span>你可以通过collapseVal知晓哪些折叠栏打开了，内容为折叠栏的name，例如：</span>
      <br>
      {{ collapseVal }}
</template>
