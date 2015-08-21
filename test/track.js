import { expect } from 'chai';
import { fetchJSON, user } from './common';

beforeEach(function(done) {
  // Throttle API calls
  setTimeout(done, 500);
});

describe('Track', function() {
  const trackByNameAndArtist = {
    artist: 'Coldplay',
    track: 'Politik'
  };

  // track.addTags
  // track.ban
  // track.getBuylinks
  // track.getCorrection
  // track.getFingerprintMetadata

  describe('getInfo', function () {
    it('should return a valid response when requesting by track', function() {
      return fetchJSON('Track.getInfo', trackByNameAndArtist)
      .then(response => {
        expect(response).to.include.key('track');
        expect(response.track).to.have.keys('album', 'artist', 'duration',
          'listeners', 'mbid', 'name', 'playcount', 'streamable',
          'toptags', 'url', 'wiki');
      });
    });
  });

  describe('getShouts', function () {
    it('should return a valid response when requesting by track', function() {
      return fetchJSON('Track.getShouts', trackByNameAndArtist)
      .then(response => {
        expect(response).to.include.key('shouts');
      });
    });
  });

  describe('getSimilar', function () {
    it('should return a valid response when requesting by track', function() {
      return fetchJSON('Track.getSimilar', trackByNameAndArtist)
      .then(response => {
        expect(response).to.include.key('similartracks');
        expect(response.similartracks).to.include.key('track');
      });
    });
  });

  describe('getTags', function () {
    it('should return a valid response when requesting by track/user', function() {
      return fetchJSON('Track.getTags', {...trackByNameAndArtist, user})
      .then(response => {
        expect(response).to.include.key('tags');
      });
    });
  });

  describe('getTopFans', function () {
    it('should return a valid response when requesting by track', function() {
      return fetchJSON('Track.getTopFans', trackByNameAndArtist)
      .then(response => {
        expect(response).to.include.key('topfans');
        expect(response.topfans).to.include.key('fan');
      });
    });
  });

  describe('getTopTags', function () {
    it('should return a valid response when requesting by track', function() {
      return fetchJSON('Track.getTopTags', trackByNameAndArtist)
      .then(response => {
        expect(response).to.include.key('toptags');
        expect(response.toptags).to.include.key('tag');
      });
    });
  });

  // track.love
  // track.removeTag
  // track.scrobble

  describe('search', function () {
    it('should return a valid response when requesting by track', function() {
      return fetchJSON('Track.search', trackByNameAndArtist)
      .then(response => {
        expect(response).to.include.key('results');
        expect(response.results).to.include.key('trackmatches');
        expect(response.results.trackmatches).to.include.key('track');
      });
    });
  });

  // track.share
  // track.unban
  // track.unlove
  // track.updateNowPlaying
});
