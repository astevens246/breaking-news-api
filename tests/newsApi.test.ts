import { getNews } from '../news-api';
import { getTopBusinessHeadlines } from '../news-api';
import { getNewsWithPopularity } from '../news-api';
import { getRecentNews } from '../news-api';


describe('getNews function', () => {
  it('fetches news data based on query, date, sort, and page', async () => {
    const query = 'bitcoin';
    const fromDate = '2024-07-01';
    const sortBy = 'publishedAt';
    const page = 1;

    const result = await getNews(query, fromDate, sortBy, page);
    expect(result).toBeDefined();
    expect(result.articles).toHaveLength(20); // Adjust based on actual API response
  });

  it('handles errors if API call fails', async () => {
    const query = 'nonexistentquery';
    const fromDate = '2024-07-01';
    const sortBy = 'publishedAt';
    const page = 1;

    await expect(getNews(query, fromDate, sortBy, page)).rejects.toThrow();
  });
});


describe('getTopBusinessHeadlines function', () => {
  it('fetches top business headlines', async () => {
    const result = await getTopBusinessHeadlines();
    expect(result).toBeDefined();
    expect(result.articles).toHaveLength(20); // Adjust based on actual API response
  });

  it('handles errors if API call fails', async () => {
    await expect(getTopBusinessHeadlines()).rejects.toThrow();
  });
});


describe('getNewsWithPopularity function', () => {
  it('fetches news with popularity based on query, date, and page', async () => {
    const query = 'bitcoin';
    const fromDate = '2024-07-01';
    const page = 1;

    const result = await getNewsWithPopularity(query, fromDate, page);
    expect(result).toBeDefined();
    expect(result.articles).toHaveLength(20); // Adjust based on actual API response
  });

  it('handles errors if API call fails', async () => {
    const query = 'nonexistentquery';
    const fromDate = '2024-07-01';
    const page = 1;

    await expect(getNewsWithPopularity(query, fromDate, page)).rejects.toThrow();
  });
});


describe('getRecentNews function', () => {
  it('fetches recent news based on query, date, and page', async () => {
    const query = 'bitcoin';
    const fromDate = '2024-07-01';
    const page = 1;

    const result = await getRecentNews(query, fromDate, page);
    expect(result).toBeDefined();
    expect(result.articles).toHaveLength(20); // Adjust based on actual API response
  });

  it('handles errors if API call fails', async () => {
    const query = 'nonexistentquery';
    const fromDate = '2024-07-01';
    const page = 1;

    await expect(getRecentNews(query, fromDate, page)).rejects.toThrow();
  });
});

