const { Datasource } = require('apollo-datasource');

class Book extends Datasource {
  constructor({ store }) {
    super();
    this.store = store;
  }
}
