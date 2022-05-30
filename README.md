# VueAddLocal

bind input value to local storage

## Installation

```
$ npm install vue-add-local
```

## Example

```vue
<template>
  <div>
    <input type="text" v-add-local="'names'" placeholder="your names" />
    <select v-add-local="'countries'">
      <option value="RW">Rwanda</option>
      <option value="DRC">DRCongo</option>
      <option value="UG">Uganda</option>
    </select>
  </div>
</template>

<script>
import Vue from 'vue';
import AddToLocalStorage from './plugins/AddToLocalStorage';
Vue.use(AddToLocalStorage);

export default {
  name: 'App',
};
</script>
```
