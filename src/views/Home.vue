<template>
  <div class="home">
    <VuseBuilder @saved="onSave" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  methods: {
    onSave (vuse) {
      //vuse.export('preview');
      vuse.export('pwa');
    }
  }
}
</script>
