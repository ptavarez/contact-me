import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  auth: service(),

  user: alias('auth.credentials.email'),
  isAuthenticated: alias('auth.isAuthenticated'),

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'))
    },

    reset () {
      this.set('credentials', {})
    }
  }
})
