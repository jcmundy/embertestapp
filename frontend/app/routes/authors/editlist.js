import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('author');
  },
  actions: {

    editAuthor(author) {
      author.set('isEditing', true);
    },

    cancelAuthorEdit(author) {
      author.set('isEditing', false);
      author.rollbackAttributes();
    },

    saveAuthor(author) {

      if (author.get('isNotValid')) {
        return;
      }

      author.set('isEditing', false);
      author.save();
    },
    editBoth(book) {
      book.set('isEditing', true);
    },

    cancelBothEdit(book) {
      book.set('isEditing', false);
      book.rollbackAttributes();
    },

    saveBoth(author) {
      author.set('isEditing', false);
      author.save().then((saveBook) => {
      saveBook.get('book').invoke('save').then((savedBook) => {
          console.log(savedBook)
         }, (error) => {
         console.log('save book error', error);
         });
      },(error) => {
        console.log('save author error', error)
      }); }
  }
});
