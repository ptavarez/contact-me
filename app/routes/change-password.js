import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  flashMessages: service(),
  notification: service('toast'),

  model () {
    return RSVP.Promise.resolve({})
  },

  actions: {
    changePassword (passwords) {
      if (passwords.next === passwords.confirmNext) {
        this.get('auth').changePassword(passwords)
        .then(() => this.get('auth').signOut())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.get('notification').success('Successfully changed your password!')
        })
        .then(() => {
          this.get('notification').warning('You have been signed out.')
        })
        .catch(() => {
          this.get('notification').error('There was a problem. Please try again.')
        })
      } else {
        this.get('notification').error('Your new passwords must match.')
      }
    },

    signOut () {
      this.get('auth').signOut()
        .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('application'))
        .then(() => {
          this.get('notification').warning('You have been signed out.')
        })
        .catch(() => {
          this.get('notification').error('There was a problem. Please try again.')
        })
    }
  }
})
