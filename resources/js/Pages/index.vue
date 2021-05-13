<template>
    <div>
        asdsad
        <inertia-link :href="$route('about')">Create User</inertia-link>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$page.props.csrf_token);
    }
};
</script>

<style></style>
