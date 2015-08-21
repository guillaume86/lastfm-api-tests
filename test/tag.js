import { expect } from 'chai';
import { fetchJSON } from './common';

beforeEach(function(done) {
  // Throttle API calls
  setTimeout(done, 500);
});

describe('Tag', function() {
  const tagByName = {
    tag: 'rock'
  };

  describe('getInfo', function () {
    it('should return a valid response when requesting by tag', function() {
      return fetchJSON('Tag.getInfo', tagByName)
      .then(response => {
        expect(response).to.include.key('tag');
        // expect(response.album).to.have.keys('name', 'artist', 'mbid', 'url',
        //   'image', 'listeners', 'playcount', 'tracks', 'tags', 'wiki');
      });
    });
  });

  describe('getSimilar', function () {
    it('should return a valid response when requesting by tag', function() {
      return fetchJSON('Tag.getSimilar', tagByName)
      .then(response => {
        expect(response).to.include.key('similartags');
        expect(response.similartags).to.include.key('tag');
      });
    });
  });

  describe('getTopAlbums', function () {
    it('should return a valid response when requesting by tag', function() {
      return fetchJSON('Tag.getTopAlbums', tagByName)
      .then(response => {
        expect(response).to.include.key('topalbums');
        expect(response.topalbums).to.include.key('album');
      });
    });
  });

  describe('getTopArtists', function () {
    it('should return a valid response when requesting by tag', function() {
      return fetchJSON('Tag.getTopArtists', tagByName)
      .then(response => {
        expect(response).to.include.key('topartists');
        expect(response.topartists).to.include.key('artist');
      });
    });
  });

  describe('getTopTags', function () {
    it('should return a valid response when requesting by tag', function() {
      return fetchJSON('Tag.getTopTags', tagByName)
      .then(response => {
        expect(response).to.include.key('toptags');
        expect(response.toptags).to.include.key('tag');
      });
    });
  });

  describe('getTopTracks', function () {
    it('should return a valid response when requesting by tag', function() {
      return fetchJSON('Tag.getTopTracks', tagByName)
      .then(response => {
        expect(response).to.include.key('toptracks');
        expect(response.toptracks).to.include.key('track');
      });
    });
  });

  // Tag.getWeeklyArtistChart
  // Tag.getWeeklyChartList

  describe('search', function () {
    it('should return a valid response when requesting by tag', function() {
      return fetchJSON('Tag.search', tagByName)
      .then(response => {
        expect(response).to.include.key('results');
        expect(response.results).to.include.key('tagmatches');
        expect(response.results.tagmatches).to.include.key('tag');
      });
    });
  });

  describe.skip('share', function () { });
});
