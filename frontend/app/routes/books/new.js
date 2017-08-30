import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('book');
  },

  actions: {

    saveBooks(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('books'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
