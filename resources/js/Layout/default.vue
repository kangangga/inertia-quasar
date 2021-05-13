<template>
    <q-layout>
        <transition name="page" mode="out-in">
            <q-page-container>
                <slot />
            </q-page-container>
        </transition>
    </q-layout>
</template>

<script>
export default {
    props: {
        title: String
    },
    watch: {
        title: {
            immediate: true,
            handler(title) {
                if (typeof title !== "undefined") document.title = title;
            }
        }
    }
};
</script>

<style></style>
