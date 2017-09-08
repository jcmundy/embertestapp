import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('book');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then((savedLibrary) => {
      savedLibrary.get('author').invoke('save');
      });
    },
  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new book');
    controller.set('buttonLabel', 'Create');
  },


    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
