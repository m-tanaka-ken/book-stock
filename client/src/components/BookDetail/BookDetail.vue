<template>
  <div class="book-detail">
    <div class="image-container">
      <img 
        :src="book.url" 
        class="image-item"
      >
    </div>
    <div class="detail-container">
      <h2 class="title">
        {{ book.name }}
      </h2>
      <borrows-button 
        :book-state="bookState" 
        @borrowBook="borrowBook" 
        @returnBook="returnBook"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import BorrowsButton from '@/components/BorrowsButton';

@Component({
  components: { BorrowsButton }
})
export default class BookDetail extends Vue {
  @Prop()
  private book!: object;
  @Prop()
  private bookState!: string;
  @Prop()
  private borrowBook!: Function;
  @Prop()
  private returnBook!: Function;
}
</script>

<style lang="scss" scoped>
.book-detail {
  display: flex;
  justify-content: space-between;

  .image-container {
    min-width: 218px;

    .image-item {
      width: 100%;
    }
  }

  .detail-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    font-size: 1.5rem;
    color: #24292e;
    border-bottom: 1px solid #7f828b;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
}
</style>
