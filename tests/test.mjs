test('getNews returns data on successful fetch', async () => {
  // Mock fetch response with example data
  const mockNewsData = { articles: [{ title: 'Test Article', url: 'https://example.com' }] };
  fetchMock.mockResponseOnce(JSON.stringify(mockNewsData));

  // Call the getNews function
  const news = await getNews();

  // Assert that the returned data matches the mock data
  expect(news).toEqual(mockNewsData);
});