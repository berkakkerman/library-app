import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message:'',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('okToSend'),
  isFiveChars:Ember.computed.gte('message.length',5),
  okToSend:Ember.computed.and('isValid','isFiveChars'),

  actions: {

    sendMessage() {
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', { email: email,message:message });
      newContact.save();
      alert(`Sending of the following message is in progress: ${this.get('emailAddress')}`);

    }
  }

});
