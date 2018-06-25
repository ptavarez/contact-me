import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  notification: service('toast'),

  model (params) {
    return this.get('store').findRecord('contact', params.contact_id)
  },

  actions: {
    updateContact (contact) {
      contact.save()
        .then(() => {
          this.get('notification').success('Successfully updated contact!')
        })
        .then(() => this.transitionTo('contacts'))
        .catch(() => {
          this.get('notification').error('There was a problem. Please try again.')
        })
    },
    deleteContact (contact) {
      contact.destroyRecord()
        .then(() => {
          this.get('notification').warning('Successfully deleted contact!')
        })
        .then(() => this.transitionTo('contacts'))
        .catch(() => {
          this.get('notification').error('There was a problem. Please try again.')
        })
    }
  }
})
