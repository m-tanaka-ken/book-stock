<template>
  <div class="page-login">
    <div class="form-container">
      <h2 class="heading">Login</h2>
      <div
        v-if="authError"
        class="error"
      >emailかpasswordが間違ってます
      </div>
      <form
        class="auth-form"
        novalidate="true"
        @submit.prevent="login"
      >
        <div class="form-row">
          <div class="field-info">
            <label
              class="field-label"
              for="email"
            >
              email
            </label>
          </div>
          <div class="field-row">
            <div class="field">
              <input
                v-validate="'required'"
                id="email"
                v-model="email"
                name="email"
                type="email"
                placeholder="example@example.com"
                class="form-input"
              >
            </div>
          </div>
          <span class="error">{{ errors.first('email') }}</span>
        </div>
        <div class="form-row">
          <div class="field-info">
            <label
              class="field-label"
              for="password"
            >
              password
            </label>
          </div>
          <div class="field-row">
            <div class="field">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                class="form-input"
              >
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Log in"
          class="form-submit"
        >
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import auth from '@/modules/authenticator';

@Component({
  metaInfo() {
    return { title: 'Login' };
  }
})
export default class Login extends Vue {
  email: string = '';
  password: string = '';
  authError: boolean = false;

  async login(): Promise<void> {
    const result = await auth.login(this.email, this.password);
    if (result) {
      this.$router.replace('/');
      return;
    }
    this.authError = true;
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
.page-login {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #5a5961;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 402px;
    padding: 30px;
    border-radius: 4px;
    background-color: #fff;

    .error {
      padding: 10px 0;
      font-size: 16px;
      color: #e50c0c;
    }

    .heading {
      margin: 10px 0;
      color: #24292e;
    }
    .auth-form {
      width: 100%;
    }
    .form-row {
      margin-bottom: 25px;
    }
    .field-info {
      margin-bottom: 12px;
    }
    .field-label {
      font-size: 14px;
    }
    .form-input {
      padding: 10px;
      font-size: 16px;
      width: 100%;
      border: 1px solid #cacaca;
      border-radius: 3px;
    }
    .form-submit {
      width: 100%;
      padding: 10px 0;
      border: 0;
      border-radius: 3px;
      color: #fff;
      background: #269f42 linear-gradient(-180deg, #2fcb53 0%, #269f42 90%);
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
