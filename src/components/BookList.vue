<template>
  <b-row>
    <b-col cols="12">
      <br>
      <h2>
        Book List
      </h2>
      <br>
      <b-table striped hover :items="books" :fields="fields">
        <template slot="actions" slot-scope="row">
          <b-btn v-b-tooltip.hover title="From here, you can delete or edit the book" size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li add v-bind:key="error" v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BookList',
  data () {
    return {
      fields: {
        isbn: { label: 'ISBN', sortable: true, 'class': 'text-center' },
        title: { label: 'Book Title', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      books: [],
      errors: []
    }
  },
  created () {
    axios.get(`https://bookstore-mevn.herokuapp.com/api/book`)
    .then(response => {
      this.books = response.data
    })
    .catch((e) => {
      alert(e.response.data.Error)
    })
  },
  methods: {
    details (book) {
      this.$router.push({
        name: 'ShowBook',
        params: { id: book._id }
      })
    }
  }
}
</script>
