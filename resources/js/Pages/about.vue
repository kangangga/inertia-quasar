<template>
    <q-page padding>
        About
        <inertia-link :href="$route('index')">Back</inertia-link>
    </q-page>
</template>

<script>
export default {
    layout: "coba",
    mounted() {
        console.log(this.$q);
        this.$q.dialog({
            title: "oke",
            message: "Hellow world"
        });
    }
};
</script>

<style></style>
