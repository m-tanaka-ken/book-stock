import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import BookDetail from './BookDetail';

storiesOf('Component', module)
  .addDecorator(withKnobs)
  .add('BookDetail', () => {
    // const name = text('name', 'name')
    const book = {
      id: 1,
      url:
        'https://images-fe.ssl-images-amazon.com/images/I/51D3wgYhpwL._AC_US160_.jpg',
      name:
        'React入門 React・Reduxの導入からサーバサイドレンダリングによるUXの向上まで (NEXT ONE)',
      created_at: '2018-07-01'
    };
    return {
      components: { BookDetail },
      template: `<book-detail :book="book"/>`,
      data() {
        return {
          book: book
        };
      }
    };
  });
