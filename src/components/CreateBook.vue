<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add a new Book
        <b-link href="#/">(Book List)</b-link>
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
                  label="Enter Genre (Science fiction, Satire, Drama, Action, Romance, Mystery, Horror):">
          <b-form-input id="genre" :state="state" v-model.trim="book.genre" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Create</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateBook",
  data() {
    return {
      book: {}
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post(`http://localhost:8080/api/book/`, this.book)
        .then(response => {
          this.$router.push({
            name: "ShowBook",
            params: { id: response.data._id }
          });
        })
        .catch(() => {
          alert("Book not created! Make sure you input valid values and try again!")
        });
    }
  }
};
</script>
