import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('contact')
  },

  actions: {
    createContact (contact) {
      console.log(contact)
      this.get('store').createRecord('contact', contact)
      .save()
        .then(() => {
          console.log('Contact Created!')
        })
        .catch(() => {
          console.log('Contact not created')
        })
    }
  }

})
