import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('contact', params.contact_id)
  },

  actions: {
    updateContact (contact) {
      contact.save()
    }
  }
})
