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
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
        .then(() => this.transitionTo('landing'))
        .then(() => {
          this.get('notification').success('Thanks for signing in!')
        })
        .catch(() => {
          this.get('notification').error('There was a problem. Please try again.')
        })
    }
  }
})
