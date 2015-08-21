import { expect } from 'chai';
import { fetchJSON, user } from './common';

beforeEach(function(done) {
  // Throttle API calls
  setTimeout(done, 200);
});

describe('Artist', function() {
  const artistByName = {
    artist: 'Coldplay'
  };

  describe.skip('addTags', function () { });
  describe.skip('getCorrection', function () { });
  describe.skip('getEvents', function () { });
  describe.skip('getPastEvents', function () { });
  describe.skip('getPodcast', function () { });

  describe('getInfo', function () {
    it('should return a valid response when requesting by artist', function() {
      return fetchJSON('Artist.getInfo', artistByName)
      .then(response => {
        expect(response).to.include.key('artist');
        expect(response.artist).to.have.keys('bio', 'image', 'mbid', 'name',
          'ontour', 'similar', 'stats', 'streamable', 'tags', 'url');
      });
    });
  });

  describe('getShouts', function () {
    it('should return a valid response when requesting by artist', function() {
      return fetchJSON('Artist.getShouts', artistByName)
      .then(response => {
        expect(response).to.include.key('shouts');
      });
    });
  });

  describe('getSimilar', function () {
    it('should return a valid response when requesting by artist', function() {
      return fetchJSON('Artist.getSimilar', artistByName)
      .then(response => {
        expect(response).to.include.key('similarartists');
        expect(response.similarartists).to.include.key('artist');
      });
    });
  });

  describe('getTags', function () {
    it('should return a valid response when requesting by artist/user', function() {
      return fetchJSON('Artist.getTags', {...artistByName, user})
      .then(response => {
        expect(response).to.include.key('tags');
      });
    });
  });

  describe('getTopAlbums', function () {
    it('should return a valid response when requesting by artist', function() {
      return fetchJSON('Artist.getTopAlbums', artistByName)
      .then(response => {
        expect(response).to.include.key('topalbums');
        expect(response.topalbums).to.include.key('album');
      });
    });
  });

  describe('getTopFans', function () {
    it('should return a valid response when requesting by artist', function() {
      return fetchJSON('Artist.getTopFans', artistByName)
      .then(response => {
        expect(response).to.include.key('topfans');
        expect(response.topfans).to.include.key('fan');
      });
    });
  });

  describe('getTopTags', function () {
    it('should return a valid response when requesting by artist', function() {
      return fetchJSON('Artist.getTopTags', artistByName)
      .then(response => {
        expect(response).to.include.key('toptags');
        expect(response.toptags).to.include.key('tag');
      });
    });
  });

  describe('getTopTracks', function () {
    it('should return a valid response when requesting by artist', function() {
      return fetchJSON('Artist.getTopTracks', artistByName)
      .then(response => {
        expect(response).to.include.key('toptracks');
        expect(response.toptracks).to.include.key('track');
      });
    });
  });

  describe.skip('removeTag', function () { });

  describe('search', function () {
    it('should return a valid response when requesting by artist', function() {
      return fetchJSON('Artist.search', artistByName)
      .then(response => {
        expect(response).to.include.key('results');
        expect(response.results).to.include.key('artistmatches');
        expect(response.results.artistmatches).to.include.key('artist');
      });
    });
  });

  describe.skip('share', function () { });
  describe.skip('shout', function () { });
});
