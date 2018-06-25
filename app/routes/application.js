import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),
  flashMessages: service(),
  notification: service('toast'),

  actions: {
    signOut () {
      this.get('auth').signOut()
        .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('application'))
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.')
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Are you sure you\'re signed-in?')
        })
    },

    error (reason) {
      console.error(reason)

      const unauthorized = reason.errors && reason.errors.some((error) =>
        error.status === '401'
      )

      if (unauthorized) {
        this.get('notification')
          .error('You must be authenticated to access this page.')
        this.transitionTo('/sign-in')
      } else {
        this.get('notification')
          .error('There was a problem. Please try again.')
      }

      return false
    }
  }
})
