import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import AppHeader from './AppHeader';

storiesOf('Component', module)
  .addDecorator(withKnobs)
  .add('Header', () => {
    const name = text('name', 'name');
    return {
      components: { AppHeader },
      template: `<app-header name="${name}"/>`
    };
  });
