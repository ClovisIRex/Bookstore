<template>
  <b-row>
    <b-col cols="12">
      <br>
      <h2>
        Edit Book
      </h2>
      <br>
      <b-jumbotron>
        <template slot="header">
          {{book.title}}
        </template>
        <template slot="lead">
          ISBN: {{book.isbn}}<br>
          Author: {{book.author}}<br>
          Description: {{book.description}}<br>
          Published Year: {{book.publicationDate}}<br>
          Price: {{book.price}}<br>
          Genre: {{book.genre}}<br>
        </template>
        <hr class="my-4">
        <b-btn variant="success" @click.stop="editbook(book._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deletebook(book._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowBook',
  data () {
    return {
      book: [],
      errors :[]
    }
  },
  created () {
    axios.get(`http://localhost:8080/api/book/` + this.$route.params.id)
    .then(response => {
      this.book = response.data
    })
    .catch(e => {
      this.errors.push(e)
      alert(e.response.data.Error)
    })
  },
  methods: {
    editbook (bookid) {
      this.$router.push({
        name: 'EditBook',
        params: { id: bookid }
      })
    },
    deletebook (bookid) {
      axios.delete('http://localhost:8080/api/book/' + bookid)
      .then((result) => {
        this.$router.push({
          name: 'BookList'
        })
      })
      .catch(e => {
        alert(e.response.data.Error)
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
