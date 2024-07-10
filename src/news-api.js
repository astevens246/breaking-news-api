import fetch from 'node-fetch';

const apiKey = 'caa94f99e23d40d29d1db0c88389230e';

export async function fetchNews(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching news: ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch news:', error);
        throw error;
    }
}

export function getNews(query, from_date, sortBy, page) {
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${from_date}&sortBy=${sortBy}&apiKey=${apiKey}&page=${page}&language=en`;
    return fetchNews(url);
}

export function getTopBusinessHeadlines() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
    return fetchNews(url);
}
