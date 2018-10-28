<template>
  <div class="book">
    <app-header 
      :name="user.name" 
      class="page-header" />
    <div class="page-container">
      <side-nav />
      <contents-container>
        <book-detail 
          :book="book" 
          :book-state="getBookState(book, user)"
          :borrow-book="borrowBook"
          :return-book="returnBook"
        />
      </contents-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import * as moment from 'moment';
import book, { Book } from '@/apis/book';
import AppHeader from '@/components/AppHeader';
import SideNav from '@/components/SideNav';
import ContentsContainer from '@/components/ContentsContainer';
import BookDetail from '@/components/BookDetail';
import { BookState } from '@/store/modules/Home';
import { UserState } from '@/store/modules/user';

const { user } = mapState(['user']);
export default Vue.extend({
  name: 'Book',
  components: {
    BookDetail,
    AppHeader,
    SideNav,
    ContentsContainer
  },
  props: { id: { type: String, required: true } },
  data() {
    return {
      book: {
        id: '0',
        url: '',
        name: '',
        created_at: '',
        borrowed_at: '',
        returned_at: '',
        last_borrowed_user: ''
      }
    };
  },
  computed: {
    user
  },
  created: function() {
    this.init();
  },
  methods: {
    init: async function() {
      if (this.book === null) {
        return;
      }

      const { data } = await book.get({ id: this.id });
      this.book = data[0];
    },
    borrowBook: async function() {
      if (this.book === null) {
        return;
      }

      // TODO 型が効いてない
      const payload: Book = Object.assign({}, this.book, {
        borrowed_at: moment().format('YYYY-MM-DD H:mm:ss'),
        last_borrowed_user: this.user.name
      });
      await book.borrowBook(payload);
      this.init();
    },
    returnBook: async function() {
      if (this.book === null) {
        return;
      }

      // TODO 型が効いてない
      const payload: Book = Object.assign({}, this.book, {
        returned_at: moment().format('YYYY-MM-DD H:mm:ss')
      });
      await book.returnBook(payload);
      this.init();
    },
    canBorrow: function(book: BookState): boolean {
      return book.borrowedAt <= book.returnedAt;
    },
    isSelf: function(book: BookState, user: UserState): boolean {
      return !!book.lastBorrowedUser && user.name === book.lastBorrowedUser;
    },
    getBookState: function(book: BookState, user: UserState): string {
      return this.canBorrow(book)
        ? 'available'
        : this.isSelf(book, user)
          ? 'borrowedSelf'
          : 'borrowed';
    }
  },
  metaInfo() {
    return { title: 'Book' };
  }
});
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
