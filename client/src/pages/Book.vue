<template>
  <div class="book">
    <app-header
      :name="name"
      class="page-header"
    />
    <div class="page-container">
      <side-nav />
      <contents-container>
        <book-detail
          :book="book" 
          :book-state="getBookState(book, name)"
          :borrow-book="borrowBook"
          :return-book="returnBook"
        />
      </contents-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import * as moment from 'moment';
import book from '@/apis/book';
import AppHeader from '@/components/AppHeader';
import SideNav from '@/components/SideNav';
import ContentsContainer from '@/components/ContentsContainer';
import BookDetail from '@/components/BookDetail';
import { BookState } from '@/store/modules/Home';

const user = namespace('user');

@Component({
  components: {
    BookDetail,
    AppHeader,
    SideNav,
    ContentsContainer
  },
  metaInfo() {
    return { title: 'Book' };
  }
})
export default class Book extends Vue {
  @user.State
  name!: any;

  @Prop()
  private id!: string;

  book: any = {
    id: '0',
    url: '',
    name: '',
    createdAt: '',
    borrowedAt: '',
    returnedAt: '',
    lastBorrowedUser: ''
  };

  async created() {
    await this.init();
  }

  async init() {
    if (this.book === null) {
      return;
    }

    const { data: books } = await book.get({ id: this.id });

    this.book = {
      id: books[0].id,
      url: books[0].url,
      name: books[0].name,
      createdAt: books[0].created_at,
      borrowedAt: books[0].borrowed_at,
      returnedAt: books[0].returned_at,
      lastBorrowedUser: books[0].last_borrowed_user
    };
  }

  async borrowBook() {
    if (this.book === null) {
      return;
    }

    const payload = {
      id: this.book.id,
      url: this.book.url,
      name: this.book.name,
      created_at: this.book.createdAt,
      returned_at: this.book.returnedAt,
      borrowed_at: moment().format('YYYY-MM-DD H:mm:ss'),
      last_borrowed_user: this.name
    };
    await book.borrowBook(payload);
    this.init();
  }

  async returnBook() {
    if (this.book === null) {
      return;
    }

    const payload = {
      id: this.book.id,
      url: this.book.url,
      name: this.book.name,
      created_at: this.book.createdAt,
      borrowed_at: this.book.borrowedAt,
      last_borrowed_user: this.name,
      returned_at: moment().format('YYYY-MM-DD H:mm:ss')
    };
    await book.returnBook(payload);
    this.init();
  }

  canBorrow(book: BookState): boolean {
    return book.borrowedAt <= book.returnedAt;
  }

  isSelf(book: BookState, name: string): boolean {
    return !!book.lastBorrowedUser && name === book.lastBorrowedUser;
  }
  getBookState(book: BookState, name: string): string {
    return this.canBorrow(book)
      ? 'available'
      : this.isSelf(book, name)
        ? 'borrowedSelf'
        : 'borrowed';
  }
}
</script>

<style lang="scss" scoped>
.book {
  display: grid;
  grid-template-rows: 47px 1fr 50px;
  grid-template-areas:
    'header'
    'content-container'
    'footer';
}

.page-header {
  grid-area: header;
}

.page-container {
  display: flex;
  justify-content: space-between;
  max-width: 1012px;
  margin: auto;
  padding: 16px 0 0;
  grid-area: content-container;
}
</style>
