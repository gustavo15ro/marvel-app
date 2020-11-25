import api from './api';
import { apiKey } from './apiKey';

const HerosService = {
  async getHeroes(page) {
    const res = await api.get(`characters?${apiKey()}`, {
      params: { orderBy: 'name', limit: '10', offset: page },
    });
    return res.data;
  },
  async getHero(characterId) {
    const res = await api.get(`characters/${characterId}?${apiKey()}`);
    return res.data;
  },
  async getComicsHero(characterId) {
    const res = await api.get(`characters/${characterId}/comics?${apiKey()}`);
    return res.data;
  },
  async getEventsHero(characterId) {
    const res = await api.get(`characters/${characterId}/events?${apiKey()}`);
    return res.data;
  },
  async getSeriesHero(characterId) {
    const res = await api.get(`characters/${characterId}/series?${apiKey()}`);
    return res.data;
  },
  async getStoriesHero(characterId) {
    const res = await api.get(`characters/${characterId}/stories?${apiKey()}`);
    return res.data;
  },

};
export default HerosService;
