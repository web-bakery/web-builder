<template>
  <div class="app-content settings">
    <div class="app-header">
      <h1 class="app-title">Settings</h1>
      <div class="app-actions">
        <div class="app-action button">
          Push me
        </div>
      </div>
    </div>
    <div class="app-main">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Chrome } from 'vue-color'

new Vue({
  components: {
    'photoshop-picker': Chrome
  }
})
export default {
  name: 'settings',

}
</script>
