<template>
  <button
    v-if="'available' === bookState"
    :class="size"
    type="button"
    class="btn"
    @click="$emit('borrowBook')"
  >借りる
  </button>
  <button
    v-else-if="'borrowedSelf' === bookState"
    :class="size"
    type="button"
    class="btn return"
    @click="$emit('returnBook')"
  >返却
  </button>
  <button
    v-else
    :class="size"
    type="button"
    class="btn disabled"
  >貸出中
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component()
export default class BorrowsButton extends Vue {
  @Prop()
  private bookState!: string;
  @Prop({ default: 'medium' })
  private size!: string;
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #614092;
  border: 1px solid #6a3381;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;

  &.medium {
    width: 180px;
    height: 48px;
  }

  &.small {
    width: 134px;
    height: 38px;
  }

  &.disabled {
    background-color: #898692;
    border-color: #898692;
  }

  &.return {
    background-color: #a93d38;
    border-color: #5c1915;
  }
}
</style>
