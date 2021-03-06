import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book'),

  isNotValid: Ember.computed.empty('name')

});
