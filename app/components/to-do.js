import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);
      if (Ember.isEmpty(this.get('todo.title'))) {
        this.send('removeTodo');
        return;
      }
      this.get('model').save();
    },
    removeTodo: function() {
      var todo = this.get('todo');
      todo.deleteRecord();
      todo.save();
    }
  }
});
