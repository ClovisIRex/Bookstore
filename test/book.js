const chai = require('chai')
const chaiHttp = require('chai-http')

const config = require('../config/server')
const server = require('../app');
const Book = require('../models/Book')

const should = chai.should();

config.dbUri = "mongodb://localhost:27017/bookstoreTest"

chai.use(chaiHttp);

describe('Books', () => {

    beforeEach((done) => {
        Book.remove({}, (err) => { 
           done();         
        });     
    });

    describe('/POST /api/book', () => {
        it('it should not POST a book with invalid genre', (done) => { 
            let book = {
                "title": "testboosfdasdk",
                "description": "tesadasdstdesc",
                "isbn": 123331232143333242343,
                "author": "tessadasdtauthor",
                "publicationDate": "2019-08-01T00:00:00.000Z",
                "genre": "asdcfsdfrror",
                "price": 212133
            }
            chai.request(server)
            .post('/api/book')
            .send(book)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('Error');
                res.body.Error.should.eql('Request failed- data not validated, enter valid data.');
              done();
            });
        });
    });

    describe('/POST /api/book', () => {
        it('it should POST a new book', (done) => { 
            let book = {
                "title": "testboosfdasdk",
                "description": "tesadasdstdesc",
                "isbn": 123331232143333242343,
                "author": "tessadasdtauthor",
                "publicationDate": "2019-08-01T00:00:00.000Z",
                "genre": "Horror",
                "price": 212133
            }
            chai.request(server)
            .post('/api/book')
            .send(book)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('title');
                res.body.should.have.property('description');
                res.body.should.have.property('isbn');
                res.body.should.have.property('publicationDate');
                res.body.should.have.property('genre');
                res.body.should.have.property('price');
              done();
            });
        });
    });

    describe('/PUT /api/book/:id', () => {
        it('it should UPDATE a book that doesnt exist', (done) => { 
            let book = {
                "title": "doesn't exist",
                "description": "tesadasdstdesc",
                "isbn": 123331232143333242343,
                "author": "tessadasdtauthor",
                "publicationDate": "2019-08-01T00:00:00.000Z",
                "genre": "Horror",
                "price": 212133
            }
            chai.request(server)
            .put('/api/book/5a82ef1f9f37813e33d03ebd')
            .send(book)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('Error');
                res.body.Error.should.eql('Request failed- data does not exist.');
              done();
            });
        });
    });

    describe('/PUT /api/book/:id', () => {
        it('it should UPDATE a book', (done) => { 
            let book = {
                "title": "newbook",
                "description": "tesadasdstdesc",
                "isbn": 123331232143333242343,
                "author": "tessadasdtauthor",
                "publicationDate": "2019-08-01T00:00:00.000Z",
                "genre": "Horror",
                "price": 212133
            }

            chai.request(server)
                .post('/api/book')
                .send(book)
                .end((err,res) => {
                    book.title = "The Chronicles of Narnia";
                    chai.request(server)
                    .put('/api/book/' + res.body._id)
                    .send(book)
                    .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('title');
                        response.body.should.have.property('description');
                        response.body.should.have.property('isbn');
                        response.body.should.have.property('publicationDate');
                        response.body.should.have.property('genre');

                        chai.request(server)
                        .get('/api/book/' + res.body._id)
                        .end((err, response) => {
                            response.body.should.have.property('title').eql("The Chronicles of Narnia"); 
                            done();
                        });     
                });
            });
        });
    });

    describe('/DELETE /api/book/:id', () => {
        it('it should DELETE a book', (done) => { 
            let book = {
                "title": "newbook",
                "description": "tesadasdstdesc",
                "isbn": 123331232143333242343,
                "author": "tessadasdtauthor",
                "publicationDate": "2019-08-01T00:00:00.000Z",
                "genre": "Horror",
                "price": 212133
            }

            chai.request(server)
                .post('/api/book')
                .send(book)
                .end((err,res) => {
                    chai.request(server)
                    .delete('/api/book/' + res.body._id)
                    .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('title');
                        response.body.should.have.property('description');
                        response.body.should.have.property('isbn');
                        response.body.should.have.property('publicationDate');
                        response.body.should.have.property('genre');
                        done();

                        chai.request(server)
                        .delete('/api/book/' + res.body._id)
                        .end((err, response) => {
                            res.should.have.status(400);
                            res.body.should.have.property('Error');
                            res.body.Error.should.eql('Request failed- data does not exist.'); 
                            done();
                        });     
                });
            });
        });
    });


    describe('/GET /api/book', () => {
        it('it should GET all the books', (done) => {
          chai.request(server)
              .get('/api/book')
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                done();
              });
        });
    });
});