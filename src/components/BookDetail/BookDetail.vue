<template>
  <div class="book-detail">
    <div class="image-container">
      <img 
        :src="book.url" 
        class="image-item">
    </div>
    <div class="detail-container">
      <h2 class="title">{{ book.name }}</h2>
      <borrows-button 
        :book-state="bookState" 
        @borrowBook="borrowBook" 
        @returnBook="returnBook" />
    </div>
  </div>
</template>

<script lang="ts">
import BorrowsButton from '@/components/BorrowsButton';

export default {
  name: 'BookDetail',
  components: { BorrowsButton },
  props: {
    book: {
      type: Object,
      required: true
    },
    bookState: {
      type: String,
      required: true
    },
    borrowBook: {
      type: Function,
      required: true
    },
    returnBook: {
      type: Function,
      required: true
    }
  }
};
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
