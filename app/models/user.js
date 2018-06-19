import DS from 'ember-data'

export default DS.Model.extend({
  email: DS.attr('string'),
  user_name: DS.attr('string')
})
