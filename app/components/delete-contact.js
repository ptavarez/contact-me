import Component from '@ember/component'

export default Component.extend({
  actions: {
    deleteContact () {
      this.sendAction('delete', this.get('contact'))
    }
  }
})
