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

      new_authorrecord.save().then((new_bookrecord) => {
    new_bookrecord.get('books').addObject(this.store.createRecord('book', {
      title: new_book}));
      new_bookrecord.save();
      this.transitionTo('books');
    });
    },
  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new library');
    controller.set('buttonLabel', 'Create');
  },


  }
  });

