import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return Ember.RSVP.hash({
   author: this.store.findAll('author'),
   book: this.store.findAll('book')
  });
  },

  setupController(controller, models) {
    controller.set('author', models.author);
    controller.set('book', models.book);
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
    }
  }

});
