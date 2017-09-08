import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('author');
  },

  actions: {

    saveLibrary(author) {
    const book = this.store.createRecord('book');

      author.save().then((book) => {
      book.set('book', book);
      book.save();
      });
    },
  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new library');
    controller.set('buttonLabel', 'Create');
  },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
  });
