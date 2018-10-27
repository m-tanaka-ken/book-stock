<template>
<div class="header-container">
  <header class="header">
    <h1 class="heading heading-area">
      <router-link
        to="/"
        class="link"
      >タイトル
      </router-link>
    </h1>
    <div class="search search-area">
      <input
        type="text"
        title="search"
        placeholder="検索窓"
        class="form-input"
      >
    </div>
    <div class="nav-user nav-user-area">
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        class="Icon nav-profile"
        xmlns="http://www.w3.org/2000/svg"
        @click="isActive = !isActive"
      >
        <g
          fill="#fff"
          fill-rule="nonzero"
        >
          <path
            d="M1.308 16.75h14.384c.029 0 .048-.005.058-.005V15.17c0-.384-.2-.971-.608-1.528-1.064-1.452-3.194-2.392-6.638-2.393-3.45 0-5.58.941-6.646 2.394-.408.556-.608 1.145-.608 1.527v1.574c.01 0 .029.005.058.005zM8.504 10c4.357 0 6.587 1.46 7.646 2.904.636.867.85 1.728.85 2.267v1.648c0 .135-.03.261-.076.381-.176.463-.66.8-1.232.8H1.308c-.573 0-1.056-.337-1.232-.8A1.06 1.06 0 0 1 0 16.82V15.17c0-.539.215-1.4.85-2.266C1.91 11.46 4.14 10 8.504 10zM8.5 7.75a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5zM8.5 9a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
        </g>
      </svg>
      <div
        v-if="isActive"
        class="dropdown-menu"
      >
        <ul class="list">
          <li class="item">{{ name }}</li>
          <li class="item">
            <router-link to="/logout">logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</div>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  background-color: #3a3fa9;
  height: 47px;
}

.header {
  display: grid;
  grid-template-columns: 1fr 180px 25px;
  grid-template-areas: 'heading search nav-user';
  align-items: center;
  max-width: 1012px;
  color: #fff;
  height: 100%;
}

.heading-area {
  grid-area: heading;
}

.search-area {
  grid-area: search;
}

.nav-user-area {
  grid-area: nav-user;
}

.heading {
  padding-left: 16px;

  .link {
    color: #fff;
    text-decoration: none;
  }
}

.nav-user {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}

.dropdown-menu {
  position: absolute;
  top: 90%;
  right: 0;
  border: 1px solid #7f828b;
  border-radius: 3px;
  padding: 5px;
  background-color: #fff;
  color: #586069;

  .list {
    list-style-type: none;

    .item {
      padding: 5px 0;
    }
  }
}

.form-input {
  font-size: 16px;
  padding: 4px;
  width: 90%;
  border: 1px solid #cacaca;
  border-radius: 3px;
}

@media screen and (max-width: 414px) {
  .header-container {
    height: 75px;
  }

  .header {
    grid-template-columns: 1fr 30px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'heading nav-user'
      'search search';
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .heading {
    text-align: center;
  }
  .search {
    text-align: center;
  }
}
</style>
