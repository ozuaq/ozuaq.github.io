<template>
  <v-app>
    <default-bar @change-drawer="drawer = !drawer" />

    <NavigationDrawer :drawer="drawer" />

    <default-view />
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import NavigationDrawer from './NavigationDrawer.vue';

  const drawer = ref(null);
</script>
