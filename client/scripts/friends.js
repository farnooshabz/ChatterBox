var Friends = {
  storage: new Set(),

  items: function() {
    return [...Friends.storage];
  },
  isFriend: function(name) {
    return Friends.storage.has(name);
  },
  toggleStatus: function(name, callback = () => {}) {
    if (Friends.isFriend(name)) {
      //delete it from set
      Friends.storage.delete(name);
      callback(false);
    } else {
      //add it to set
      Friends.storage.add(name);
      callback(true);
    }
  }

};