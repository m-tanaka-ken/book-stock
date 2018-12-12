<template>
  <div class="book-list-container">
    <h2 class="title">{{ title }}</h2>
    <ul class="list">
      <li 
        v-for="book in books"
        :key="book.id"
        class="item"
      ><router-link 
        :to="`/books/${book.id}`" 
        class="item-image"><img
          :src="book.url"
          :alt="book.name"
        >
      </router-link>
        <p class="item-title"><router-link :to="`/books/${book.id}`">{{ book.name }}</router-link></p>
        <borrows-button 
          :book-state="getBookState(book, user)" 
          class="item-button" 
          size="small" 
          @borrowBook="$emit('borrowBook', book)" 
          @returnBook="$emit('returnBook', book)" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { BookState } from 'src/store/modules/Home';
import { UserState } from 'src/store/modules/user';
import BorrowsButton from 'src/components/BorrowsButton';

@Component({
  components: {
    BorrowsButton
  }
})
export default class BookList extends Vue {
  @Prop()
  private title!: string;
  @Prop()
  private books!: [BookState];
  @Prop()
  private user!: UserState;

  private canBorrow(book: BookState): boolean {
    return book.borrowedAt <= book.returnedAt;
  }

  private isSelf(book: BookState, user: UserState): boolean {
    return !!book.lastBorrowedUser && user.name === book.lastBorrowedUser;
  }

  getBookState(book: BookState, user: UserState): string {
    return this.canBorrow(book)
      ? 'available'
      : this.isSelf(book, user)
        ? 'borrowedSelf'
        : 'borrowed';
  }
}
</script>

<style lang="scss" scoped>
.book-list-container {
  width: 100%;
  + .book-list-container {
    margin-top: 20px;
  }
}

.title {
  font-size: 1.5rem;
  color: #24292e;
  border-bottom: 1px solid #7f828b;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(2, 300px);
  grid-gap: 30px 5%;
  grid-auto-flow: row;
}

.item {
  display: grid;
  grid-template-rows: 160px 70px 1fr;
  grid-gap: 15px;
  align-items: start;
  justify-items: center;
}

@media screen and (max-width: 414px) {
  .contents-container {
    padding: 0;
  }

  .list {
    flex-direction: column;
    grid-template-columns: 100%;
    grid-template-rows: 160px;
    grid-gap: 20px;
    grid-auto-flow: row;
  }

  .item {
    grid-template-columns: 160px 1fr;
    grid-template-rows: 1fr 38px;
    grid-template-areas:
      'itme-image item-title'
      'itme-image item-button';
    grid-gap: 10px;
    width: 100%;

    &-image {
      grid-area: itme-image;
    }

    &-title {
      grid-area: item-title;
      font-size: 16px;
    }

    &-button {
      grid-area: item-button;
    }
  }
}
</style>
