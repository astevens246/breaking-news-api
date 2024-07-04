const apiKey = 'caa94f99e23d40d29d1db0c88389230e';

export async function getNews(query, from_date, sortBy, page) {
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${from_date}&sortBy=${sortBy}&apiKey=${apiKey}&page=${page}&language=en`;
    console.log('Fetching URL:', url);  
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching news: ${res.statusText}`);
        }
        const json = await res.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch news:', error);
        throw error;
    }
}

export async function getTopBusinessHeadlines() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
    console.log('Fetching URL:', url);  
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching top business headlines: ${res.statusText}`);
        }
        const json = await res.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch top business headlines:', error);
        throw error;
    }
}

export async function getNewsWithPopularity(query, from_date, page) {
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${from_date}&sortBy=popularity&apiKey=${apiKey}&page=${page}&language=en`;
    console.log('Fetching URL:', url);
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching news with popularity: ${res.statusText}`);
        }
        const json = await res.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch news with popularity:', error);
        throw error;
    }
}

export async function getRecentNews(query, from_date, page) {
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${from_date}&sortBy=publishedAt&apiKey=${apiKey}&page=${page}&language=en`;
    console.log('Fetching URL:', url);
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching recent news: ${res.statusText}`);
        }
        const json = await res.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch recent news:', error);
        throw error;
    }
}