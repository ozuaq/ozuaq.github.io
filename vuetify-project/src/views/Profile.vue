<template>
    <!--
      <HelloWorld />
    -->
    <TwitterCard :msg="msg" />
    <ButtonCounter class="my-4" />
    <ButtonCounter />
    <p>
        <router-link to="/home">Go to Home</router-link>
    </p>
  </template>
  
  <script setup>
    //import HelloWorld from '@/components/HelloWorld.vue'
    import TwitterCard from '@/components/TwitterCard.vue'
    import ButtonCounter from '@/components/ButtonCounter.vue';
  
    const msg = "Vueってやっぱおもろいわ〜!";
  </script>
  