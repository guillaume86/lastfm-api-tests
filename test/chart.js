import { expect } from 'chai';
import { fetchJSON } from './common';

beforeEach(function(done) {
  // Throttle API calls
  setTimeout(done, 500);
});

describe('Chart', function() {
  describe('getHypedArtists', function () {
    it('should return a valid response', function() {
      return fetchJSON('Chart.getHypedArtists')
      .then(response => {
        expect(response).to.include.key('artists');
        expect(response.artists).to.include.key('artist');
      });
    });
  });

  describe('getHypedTracks', function () {
    it('should return a valid response', function() {
      return fetchJSON('Chart.getHypedTracks')
      .then(response => {
        expect(response).to.include.key('tracks');
        expect(response.tracks).to.include.key('track');
      });
    });
  });

  describe('getLovedTracks', function () {
    it('should return a valid response', function() {
      return fetchJSON('Chart.getLovedTracks')
      .then(response => {
        expect(response).to.include.key('tracks');
        expect(response.tracks).to.include.key('track');
      });
    });
  });

  describe('getTopArtists', function () {
    it('should return a valid response', function() {
      return fetchJSON('Chart.getTopArtists')
      .then(response => {
        expect(response).to.include.key('artists');
        expect(response.artists).to.include.key('artist');
      });
    });
  });

  describe('getTopTags', function () {
    it('should return a valid response', function() {
      return fetchJSON('Chart.getTopTags')
      .then(response => {
        expect(response).to.include.key('tags');
        expect(response.tags).to.include.key('tag');
      });
    });
  });

  describe('getTopTracks', function () {
    it('should return a valid response', function() {
      return fetchJSON('Chart.getTopTracks')
      .then(response => {
        expect(response).to.include.key('tracks');
        expect(response.tracks).to.include.key('track');
      });
    });
  });
});
