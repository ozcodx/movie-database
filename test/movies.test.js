import { use, expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../app.js';

const chai = use(chaiHttp)

describe('Movies API', () => {
  describe('GET /api/movies', () => {
    it('should return all movies', (done) => {
      chai.request(app)
        .get('/api/movies')
        .end((err, res) => {
          if (err) done(err);

          // check that is a vslid response
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.greaterThan(0);

          // validate first element structure
          const movie = res.body[0];
          expect(movie).to.have.property('title');
          expect(movie).to.have.property('genres');
          expect(movie).to.have.property('year');
          expect(movie).to.have.property('cast');
          expect(movie).to.have.property('duration');
          expect(movie).to.have.property('imdbRating');
          expect(movie).to.have.property('viewerCount');
          
          done();
        });
    });
  });
});