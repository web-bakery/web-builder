<template>
    <div id="main_nav">
       MainNav goes here
       <ProjectNav />
       <AppNav />
    </div>
</template>

<script>
    import AppNav from './AppNav'
    import ProjectNav from './ProjectNav'
    export default {
        name: 'MainNav',
        components: { AppNav, ProjectNav }
    }
</script>
