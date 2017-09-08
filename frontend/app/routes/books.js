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
  }
});
