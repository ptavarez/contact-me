import Component from '@ember/component'

export default Component.extend({
  contact: {
    first_name: '',
    last_name: '',
    job_title: '',
    phone_number: '',
    email: ''
  },

  actions: {
    createContact () {
      this.sendAction('create', this.get('contact'))
      this.set('contact', {})
    }
  }
})
