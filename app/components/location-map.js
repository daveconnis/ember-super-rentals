import Ember from 'ember';

export default Ember.Component.extend({
  maps: Ember.inject.service(),

  didInsertElement() {
    this._super(...arguments);
    let location = this.get('location');
    console.log(this.get('maps'));
    let mapElement = this.get('maps').getMapElement(location);
    this.$('.map-container').append(mapElement);
    }
  });
