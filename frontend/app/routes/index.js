import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    saveInvitation() {
      const email = this.controller.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then((response) => {
      this.controller.set('responseMessage', `Thank you! We've just saved your email address: ${this.controller.get('emailAddress')}`);
      this.controller.set('emailAddress', '');
            });
    }
  }

});
