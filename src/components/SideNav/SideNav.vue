<template>
<div class="side-nav">
  <div class="content info">
    <h2>notice</h2>
    <p>ここにレンタル中の情報などがはいる</p>
  </div>
  <div class="content category pc">
    <h2>カテゴリ</h2>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Vue</li>
      <li>Angular</li>
      <li>PHP</li>
      <li>Java</li>
      <li>Go</li>
      <li>Ruby</li>
      <li>Python</li>
      <li>HTML・CSS</li>
      <li>設計</li>
      <li>アルゴリズム</li>
      <li>コンピューターサイエンス</li>
    </ul>
  </div>
  <div class="category sp">
    <h2 class="dropdown" @click="isActive = !isActive">カテゴリ</h2>
    <div class="list" v-if="isActive">
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
        <li>PHP</li>
        <li>Java</li>
        <li>Go</li>
        <li>Ruby</li>
        <li>Python</li>
        <li>HTML・CSS</li>
        <li>設計</li>
        <li>アルゴリズム</li>
        <li>コンピューターサイエンス</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: 'SideNav',
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
.side-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 311px;
  padding: 0 10px;
}

.content {
  width: 100%;
  border: 1px solid #7f828b;
  border-radius: 4px;
  padding: 4px;

  + .content {
    margin-top: 16px;
  }
}

.sp {
  display: none;
}

@media screen and (max-width: 414px) {
  .pc {
    display: none;
  }

  .sp {
    display: block;

    &.category {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 30px;
      border-bottom: 1px solid #aaa;
      width: 100%;
      padding-right: 10px;
    }
  }

  .list {
    position: absolute;
    top: 90%;
    right: 0;
    border: 1px solid #333;
    background: #fff;
  }

  .side-nav {
    width: 100%;
    padding: 0;
  }

  .info {
    border: 0;
    background: #3862c0;
    border-radius: 0;
    color: #eee;
  }
}
</style>
