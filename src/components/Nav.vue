<template>
    <div id="nav">
        <router-link class="nav-item nav-logo" to="/">
            <img src="@/assets/logo.png">
            <span>Website Title</span>         
        </router-link>
        <div class="nav-menu">
            <router-link class="nav-item" to="/">Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
   name: 'Nav'
}
</script>
