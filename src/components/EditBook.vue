<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Book
        <router-link :to="{ name: 'ShowBook', params: { id: book._id } }">(Show Book)</router-link>
      </h2>
      <br>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter ISBN:">
          <b-form-input id="isbn" :state="state" v-model.trim="book.isbn" required></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Title:">
          <b-form-input id="title" :state="state" v-model.trim="book.title" required></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Author:">
          <b-form-input id="author" :state="state" v-model.trim="book.author" required></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Description:">
            <b-form-textarea id="description"
                       v-model="book.description"
                       placeholder="Enter your description here..."
                       :rows="2"
                       :max-rows="6" required>{{book.description}} </b-form-textarea>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Publish Year:">
          <b-form-input id="publicationDate" :state="state" v-model.trim="book.publicationDate" required></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Price:">
          <b-form-input id="price" :state="state" v-model.trim="book.price" required></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Genre:">
            <b-form-select v-model.trim="book.genre" class="mb-3">
            <option :value="null">Please select an genre...</option>
            <option value="Science fiction">Science Fiction</option>
            <option value="Satire">Satire</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Mystery">Mystery</option>
            <option value="Horror">Horror</option>
          </b-form-select>
        </b-form-group>
        <b-button type="submit" variant="primary">Update</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";

export default {
  name: "EditBook",
  data() {
    return {
      book: {},
      errors : []
    };
  },
  created() {
    axios
      .get(`https://bookstore-mevn.herokuapp.com/api/book/` + this.$route.params.id)
      .then(response => {
        this.book = response.data;
      })
      .catch((e) => {
        alert(e.response.data.Error)
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let payload = {
        "title": this.book.title,
        "description": this.book.description,
        "isbn": this.book.isbn,
        "author": this.book.author,
        "publicationDate": this.book.publicationDate,
        "genre": this.book.genre,
        "price": this.book.price
      }
      axios
        .put(
          `https://bookstore-mevn.herokuapp.com/api/book/` + this.$route.params.id,
          payload
        )
        .then(response => {
          this.$router.push({
            name: "ShowBook",
            params: { id: this.$route.params.id }
          });
        })
        .catch((e) => {
          this.errors.push(e)
          alert(e.response.data.Error)
        });
    }
  }
};
</script>
