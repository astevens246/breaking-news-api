import { getNews, getTopBusinessHeadlines } from '../src/news-api.js';

describe('News API Library', () => {

  test('fetches news articles based on query', async () => {
    const data = await getNews('technology', '2023-07-01', 'publishedAt', 1);
    expect(data.articles).toBeDefined();
    expect(data.articles.length).toBeGreaterThan(0);
  });

  test('fetches top business headlines', async () => {
    const data = await getTopBusinessHeadlines();
    expect(data.articles).toBeDefined();
    expect(data.articles.length).toBeGreaterThan(0);
  });

  test('fetches news articles sorted by popularity', async () => {
    const data = await getNews('technology', '2023-07-01', 'popularity', 1);
    expect(data.articles).toBeDefined();
    expect(data.articles.length).toBeGreaterThan(0);
  });

  test('fetches news articles sorted by relevancy', async () => {
    const data = await getNews('technology', '2023-07-01', 'relevancy', 1);
    expect(data.articles).toBeDefined();
    expect(data.articles.length).toBeGreaterThan(0);
  });

  test('fetches news articles with an empty query', async () => {
    const data = await getNews('', '2023-07-01', 'publishedAt', 1);
    expect(data.articles).toBeDefined();
    expect(data.articles.length).toBeGreaterThan(0);
  });

  test('fetches news articles with a future date', async () => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);
    const data = await getNews('technology', futureDate.toISOString().split('T')[0], 'publishedAt', 1);
    expect(data.articles).toBeDefined();
    expect(data.articles.length).toBe(0); // Expecting no articles for a future date
  });

  test('handles invalid API key error', async () => {
    const invalidApiKey = 'invalid_api_key';
    const originalApiKey = process.env.NEWS_API_KEY; // Assume the API key is stored in an environment variable
    process.env.NEWS_API_KEY = invalidApiKey;
    try {
      await getNews('technology', '2023-07-01', 'publishedAt', 1);
    } catch (error) {
      expect(error.message).toMatch(/Error fetching news/);
    }
    process.env.NEWS_API_KEY = originalApiKey; // Restore original API key
  });


});
