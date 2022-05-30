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

## Demo

![demo](https://res.cloudinary.com/ngaboindev/image/upload/v1653900610/gifs/ezgif-3-14dc7b28ea_pxfxf8.gif)

