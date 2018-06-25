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
    signUp (credentials) {
      this.get('auth').signUp(credentials)
        .then(() => this.get('auth').signIn(credentials))
        .then(() => this.transitionTo('landing'))
        .then(() => {
          this.get('notification')
            .success('Successfully signed-up! You have also been signed-in.')
        })
        .catch(() => {
          this.get('notification')
            .error('There was a problem. Please try again using a differernt email.')
        })
    }
  }
})
