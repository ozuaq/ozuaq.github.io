<template>
  <v-app-bar color="grey-darken-3">
    <v-app-bar-title>Wappen</v-app-bar-title>
    <template v-slot:append>
      <v-btn variant="outlined" class="text-none" @click="changeDrawer()">see contents</v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
const emit = defineEmits(['changeDrawer']);
const changeDrawer = () => {
  emit('changeDrawer');
};
</script>
