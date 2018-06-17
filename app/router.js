import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('landing', { path: '/' })
  this.route('create-contact')
  this.route('contacts')
  this.route('contact', { path: '/contacts/:contact_id' })
  this.route('search', {path: '/contacts/#/:searchQuery'})
})

export default Router
