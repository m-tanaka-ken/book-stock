<template>
  <div class="contents-container">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContentsContainer'
};
</script>

<style scoped>
.contents-container {
  width: 701px;
  padding: 0 10px 0 32px;
}

@media screen and (max-width: 414px){
  .contents-container {
    width: 100%;
    padding: 0;
  }
}
</style>
