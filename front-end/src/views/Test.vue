<script setup>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';
</script>

<template>
  <div>
    <h1>Edit Word</h1>
    <word-form @createOrUpdate="createOrUpdate" :word=this.word></word-form>
  </div>
</template>

<style scoped>

</style>