<template>
    <v-app>
        <app-login/>
    </v-app>
</template>

<script>
  import AppLogin from '@/components/Login/Login.vue'
  export default {
    middleware: 'guest',
    components: {
      AppLogin
    }
  }
</script>
