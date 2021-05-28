class Emitter {
  constructor() {
    this.events = {};
  }

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  emit(type) {
    if (this.events?.type) {
      console.log('Event not defined');
      return;
    } else if (this.events[type].length === 0) {
      console.log('Event has no listeners');
      return;
    }

    this.events[type].forEach(listener => listener());
  }
}

module.exports = Emitter;
