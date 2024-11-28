<template>
  <div>
    <h1>Words</h1>
    <h2>
      <input type="text" v-model="search" placeholder="Search for a word" />
    </h2>
    <table id="words" class="ui celled compact table">
      <thead>
      <tr>
        <th @click="sortBy('english')">English</th>
        <th @click="sortBy('german')">German</th>
        <th @click="sortBy('vietnamese')">Vietnamese</th>
        <th colspan="3" class="center aligned">Options</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(word, i) in filteredWords" :key="i">
        <td v-html="highlight(word.english)"></td>
        <td v-html="highlight(word.german)"></td>
        <td v-html="highlight(word.vietnamese)"></td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: word._id } }">Show</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: word._id } }">Edit</router-link>
        </td>
        <td
            width="75"
            class="center aligned"
            @click.prevent="onDestroy(word._id)">
          <a :href="`/words/${word._id}`" style="color: red">Destroy</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'words',
  data() {
    return {
      words: [],
      search: '',
      sortOrder: {
        column: '',
        ascending: true,
      },
    };
  },
  computed: {
    filteredWords() {
      return this.words.filter(word => {
        const searchTerm = this.search.toLowerCase();
        return (
            word.english.toLowerCase().includes(searchTerm) ||
            word.german.toLowerCase().includes(searchTerm) ||
            word.vietnamese.toLowerCase().includes(searchTerm)
        );
      });
    },
  },

  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure you want to delete this word?');
      if (!sure) return;
      await api.deleteWord(id);
      this.flash('Word has been deleted!', 'success');
      const newWords = this.words.filter(word => word._id !== id);
      this.words = newWords;
      location.reload();
    },
    highlight(text) {
      const searchTerm = this.search.toLowerCase();
      if (!searchTerm) return text;
      const regex = new RegExp(`(${searchTerm})`, 'gi');
      return text.replace(regex, '<strong>$1</strong>');
    },
  },
  async mounted() {
    this.words = await api.getWords();
  },
};
</script>
