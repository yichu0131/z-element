<script setup lang="ts">
</script>
<template>

    <div class="mb-4">
      <vk-button>Default</vk-button>
      <vk-button type="primary">Primary</vk-button>
      <vk-button type="success">Success</vk-button>
      <vk-button type="info">Info</vk-button>
      <vk-button type="warning">Warning</vk-button>
      <vk-button type="danger">Danger</vk-button>
    </div>

    <div class="mb-4">
      <vk-button plain>Plain</vk-button>
      <vk-button type="primary" plain>Primary</vk-button>
      <vk-button type="success" plain>Success</vk-button>
      <vk-button type="info" plain>Info</vk-button>
      <vk-button type="warning" plain>Warning</vk-button>
      <vk-button type="danger" plain>Danger</vk-button>
    </div>

    <div class="mb-4">
    <vk-button round>Round</vk-button>
    <vk-button type="primary" round>Primary</vk-button>
    <vk-button type="success" round>Success</vk-button>
    <vk-button type="info" round>Info</vk-button>
    <vk-button type="warning" round>Warning</vk-button>
    <vk-button type="danger" round>Danger</vk-button>
  </div>

  <div>
    <vk-button icon="Search" circle />
    <vk-button type="primary" icon="house" circle />
    <vk-button type="success" icon="Check" circle />
    <vk-button type="info" icon="Message" circle />
    <vk-button type="warning" icon="Star" circle />
    <vk-button type="danger" icon="Delete" circle />
    <vk-button size="large" circle> <VKIcon icon="fa-solid fa-user-secret" size="2x" type="danger" /> </vk-button>
  </div>
    <!-- <vk-button ref="vk-buttonRef">Test vk-button</vk-button>
    <vk-button plain>Plain</vk-button>
    <vk-button round>Round</vk-button>
    <vk-button circle>VK</vk-button>
    <vk-button disabled>Disabled vk-button</vk-button><br/><br/>
    <vk-button type="primary">Primary</vk-button>
    <vk-button type="success">Success</vk-button>
    <vk-button type="info">Info</vk-button>
    <vk-button type="warning">Warning</vk-button>
    <vk-button type="danger">Danger</vk-button><br/><br/>
    <vk-button type="primary" plain>Primary</vk-button>
    <vk-button type="success" plain>Success</vk-button>
    <vk-button type="info" plain>Info</vk-button>
    <vk-button type="warning" plain>Warning</vk-button>
    <vk-button type="danger" plain>Danger</vk-button><br/><br/>
    <vk-button size="large">Large</vk-button>
    <vk-button size="small">Small</vk-button><br/><br/>
    <vk-button size="large" icon="house" loading>Loading</vk-button>
    <vk-button size="large" icon="house"></vk-button><br/><br/>
    <vk-button size="large" icon="house" disabled>关闭</vk-button><br/><br/> -->
</template>
<style>
  .mb-4 {
    margin-bottom: 1rem; /* 或者其他你希望的距离 */
  }
</style>
