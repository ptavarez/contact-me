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
    updateContact () {
      this.sendAction('update', this.get('contact'))
    }
  }
})
