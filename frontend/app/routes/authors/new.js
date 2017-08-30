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

    actionstime() {
        var author = this.store.createRecord('author', {});

        const newwork = author.get('books').createRecord({});
        newwork.save().then((response) => {
      this.controller.set('responseMessage', `Thank you! We've just saved your email address`);
            });
    }
  }

});
