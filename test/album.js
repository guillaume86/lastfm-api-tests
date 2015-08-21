import { expect } from 'chai';
import { fetchJSON, user } from './common';

beforeEach(function(done) {
  // Throttle API calls
  setTimeout(done, 200);
});

describe('Album', function() {
  const albumByName = {
    artist: 'Coldplay',
    album: 'Parachutes'
  };

  describe.skip('addTags', function () { });
  describe.skip('getBuylinks', function () { });

  describe('getInfo', function () {
    it('should return a valid response when requesting by artist/album', function() {
      return fetchJSON('Album.getInfo', albumByName)
      .then(response => {
        expect(response).to.include.key('album');
        expect(response.album).to.have.keys('name', 'artist', 'mbid', 'url',
          'image', 'listeners', 'playcount', 'tracks', 'tags', 'wiki');
      });
    });
  });

  describe('getShouts', function () {
    it('should return a valid response when requesting by artist/album', function() {
      return fetchJSON('Album.getShouts', albumByName)
      .then(response => {
        expect(response).to.include.key('shouts');
      });
    });
  });

  describe('getTags', function () {
    it('should return a valid response when requesting by artist/album/user', function() {
      return fetchJSON('Album.getTags', {...albumByName, user})
      .then(response => {
        expect(response).to.include.key('tags');
      });
    });
  });

  describe('getTopTags', function () {
    it('should return a valid response when requesting by artist/album', function() {
      return fetchJSON('Album.getTopTags', albumByName)
      .then(response => {
        expect(response).to.include.key('toptags');
        expect(response.toptags).to.include.key('tag').to.exist;
      });
    });
  });

  describe.skip('removeTag', function () { });

  describe('search', function () {
    it('should return a valid response when requesting by album', function() {
      return fetchJSON('Album.search', albumByName)
      .then(response => {
        expect(response).to.include.key('results');
        expect(response.results).to.include.key('albummatches');
        expect(response.results.albummatches).to.include.key('album');
      });
    });
  });

  describe.skip('share', function () { });
});
