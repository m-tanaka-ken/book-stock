import { Validator } from 'vee-validate';
// TODO 暫定処理
// @ts-ignore
import ja from 'vee-validate/dist/locale/ja';

Validator.localize({ja: ja});

export default {
  locale: ja
};
