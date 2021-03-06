import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('invitation');
  this.route('contact');
  this.route('about');

  this.route('admin', function() {
    this.route('invitations');
    this.route('messages');
    this.route('seeder');
  });

  this.route('libraries', function() {
    this.route('new');
    this.route('edit', { path: '/:library_id/edit' });
  });

  this.route('authors', function() {
    this.route('new');
    this.route('edit', { path: '/:author_id/edit' });
    this.route('index');
    this.route('editlist');
  this.route('books');
});
  this.route('books', function() {
    this.route('new');
    this.route('index');
  });
});
export default Router;
