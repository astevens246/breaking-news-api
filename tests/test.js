import { getNews, getTopBusinessHeadlines, getNewsWithPopularity, getRecentNews, NewsResponse } from '../src/news-api.js';

describe('News API', () => {
    it('should get news sorted by popularity', async () => {
        const news = await getNewsWithPopularity('technology', '2022-01-01', '2022-01-02');
        expect(news).toBeInstanceOf(NewsResponse);
    });

    it('should get recent news', async () => {
        const news = await getRecentNews('technology', '2022-01-01', '2022-01-02');
        expect(news).toBeInstanceOf(NewsResponse);
    });
});

describe('Top Business Headlines', () => {
    it('should get top business headlines', async () => {
        const news = await getTopBusinessHeadlines();
        expect(news).toBeInstanceOf(NewsResponse);
    });
});

describe(getTopBusinessHeadlines, () => {
    it('should get top business headlines', async () => {
        const news = await getTopBusinessHeadlines();
        expect(news).toBeInstanceOf(NewsResponse);
    });
});

describe(getNewsWithPopularity, () => {
    it('should get news sorted by popularity', async () => {
        const news = await getNewsWithPopularity('technology', '2022-01-01', '2022-01-02');
        expect(news).toBeInstanceOf(NewsResponse);
    });
});

describe(getRecentNews, () => {
    it('should get recent news', async () => {
        const news = await getRecentNews('technology', '2022-01-01', '2022-01-02');
        expect(news).toBeInstanceOf(NewsResponse);
    });
});

describe(getNews, () => {
    it('should get news', async () => {
        const news = await getNews('technology', '2022-01-01', 'popularity', 1);
        expect(news).toBeInstanceOf(NewsResponse);
    });
});
