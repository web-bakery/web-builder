<template>
  <div class="home">
    <Nav />
    <VuseBuilder @saved="onSave" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
 
export default {
  name: 'builder',
  components: { Nav, Footer },
  methods: {
    onSave (vuse) {
      //vuse.export('preview');
      vuse.export('pwa');
    }
  }
}
</script>
