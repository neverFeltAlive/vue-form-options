<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    submitHandler() {
      alert('Form Submitted');
    },
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <form @submit.prevent="submitHandler"></form>
</template>

<style scoped lang="scss"></style>
