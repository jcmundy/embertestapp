import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('author');
  },

  actions: {
    saveBoth: function() {
      var new_author = this.get('controller.new_author');
      var new_book = this.get('controller.new_book');
      var new_authorrecord = this.store.createRecord('author', {
      name: new_author});

      new_authorrecord.save().then(() => {
    new_authorrecord.get('books').addObject(this.store.createRecord('book', {
      title: new_book, author: new_author})).then((blue) => {
      blue.save(); });

    });
    },
  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new library');
    controller.set('buttonLabel', 'Create');
  },


  }
  });

