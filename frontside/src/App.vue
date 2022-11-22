<template>
    <div>
        <Navbar></Navbar>
        <div class="container mt-3">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/CNavbar.vue'
    export default {
        name: 'App',
        components: {
            Navbar,
        }
    }
</script>

<style>

</style>
