<template>
    <div class="text-center">
        <v-btn class="text-none" @click="count++" prepend-icon="mdi-check-circle">
            <template v-slot:prepend>
                <v-icon color="success"></v-icon>
            </template>

            ButtonCounter

            <template v-slot:append>
                {{ count }}
            </template>
        </v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>