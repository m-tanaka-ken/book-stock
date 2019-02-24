<template>
  <div class="home">
    <app-header :name="user.name" class="page-header" />
    <div class="page-container">
      <side-nav />
      <contents-container v-show="true">
        <book-list
          :books="newBooks"
          :user="user"
          title="新着"
          @borrowBook="borrowBook"
          @returnBook="returnBook"
        />
        <book-list
          :books="recommendBooks"
          :user="user"
          title="おすすめ"
          @borrowBook="borrowBook"
          @returnBook="returnBook"
        />
      </contents-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as moment from 'moment';
import { State, namespace } from 'vuex-class';

import AppHeader from '../components/AppHeader';
import SideNav from '../components/SideNav';
import ContentsContainer from '../components/ContentsContainer';
import BookList from '../components/BookList';
import apiBook from '../apis/book';

const home = namespace('Home');
const user = namespace('user');

@Component({
  components: {
    AppHeader,
    SideNav,
    ContentsContainer,
    BookList
  },
  metaInfo() {
    return { title: 'Home' };
  }
})
export default class Home extends Vue {
  @home.State
  newBooks!: any;
  @home.State
  recommendBooks!: any;
  @State('user')
  user!: any;

  @user.Getter
  nameAdd!: any;

  @home.Action
  init!: any;

  async created() {
    await this.init();
  }

  async borrowBook(book: any) {
    const payload = {
      id: book.id,
      url: book.url,
      name: book.name,
      returned_at: book.returnedAt,
      created_at: book.createdAt,
      borrowed_at: moment().format('YYYY-MM-DD H:mm:ss'),
      last_borrowed_user: this.user.name
    };
    await apiBook.borrowBook(payload);
    this.init();
  }

  async returnBook(book: any) {
    const payload = {
      id: book.id,
      url: book.url,
      name: book.name,
      created_at: book.createdAt,
      borrowed_at: book.borrowedAt,
      last_borrowed_user: book.lastBorrowedUser,
      returned_at: moment().format('YYYY-MM-DD H:mm:ss')
    };
    await apiBook.returnBook(payload);
    this.init();
  }
}
</script>

<style lang="scss" scoped>
.home {
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
  grid-area: content-container;
  display: flex;
  justify-content: space-between;
  max-width: 1012px;
  margin: auto;
  padding: 16px 0 0;
}

@media screen and (max-width: 414px) {
  .home {
    grid-template-rows: 75px 1fr 50px;
  }

  .page-container {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
}
</style>
