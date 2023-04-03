<template>
    <v-navigation-drawer v-model="thisDrawer" temporary color="grey-darken-2">
        <v-list density="compact" nav>
            <v-list-item v-for="view in viewList" :key="view.to" :prepend-icon="view.icon" :title="view.title"
                :value="view.title" @click="changeView(view.to)"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    drawer: Boolean
});
const router = useRouter();
const changeView = (to) => {
    router.push(to);
}
const viewList = [
    { icon: 'mdi-view-dashboard', title: 'Home', to: '/' },
    { icon: 'mdi-forum', title: 'Research', to: '/research' }
];

const thisDrawer = ref(props.drawer);

watch(
    () => props.drawer,
    () => {
        thisDrawer.value = !thisDrawer.value;
    }
);

console.log(props.drawer);
</script>