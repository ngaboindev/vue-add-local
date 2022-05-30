const Storage = {
  prefix: 'v_bind_local_',

  set(key, data) {
    localStorage.setItem(this.getKey(key), data);
  },

  get(key) {
    return localStorage.getItem(this.getKey(key));
  },

  setJSON(key, data) {
    let json = JSON.stringify(data);
    this.set(key, json);
  },

  getJSON(key, def = null) {
    let data = this.get(key);
    if (!data && def) return def;
    return JSON.parse(data);
  },

  getKey(key) {
    return `${this.prefix}_${key}`;
  },

  remove(key) {
    if (Array.isArray(key)) {
      key.forEach((value) => {
        localStorage.removeItem(this.getKey(value));
      });
    } else {
      localStorage.removeItem(this.getKey(key));
    }
  },
};

export { Storage };
