import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('contact')
  },

  didInsertElement () {
    this.set('searchQuery', '')
  },

  actions: {
    search (searchQuery) {
      console.log(searchQuery)
      this.transitionTo('search', searchQuery)
    }
  }
})
