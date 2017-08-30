import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('author');
  },

  actions: {

    actionstime() {
        var author = this.store.createRecord('author', {});

        const newwork = author.get('books').createRecord({});
        newwork.save().then((response) => {
      this.controller.set('responseMessage', `Thank you! We've just saved your email address`);
            });
    }
  }

});
