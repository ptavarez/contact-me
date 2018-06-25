import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  notification: service('toast'),

  model () {
    return this.get('store').findAll('contact')
  },

  actions: {
    createContact (contact) {
      this.get('store').createRecord('contact', contact)
      .save()
      .then(() => this.transitionTo('contacts'))
        .then(() => {
          this.get('notification').success('Contact Created')
        })
        .catch(() => {
          this.get('notification').error('There was a problem. Please try again.')
        })
    }
  }

})
