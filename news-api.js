export async function getNews(query, from_date, sortBy, page) {
    const apiKey = 'caa94f99e23d40d29d1db0c88389230e';
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${from_date}&sortBy=${sortBy}&apiKey=${apiKey}&page=${page}&language=en`;

        const res = await fetch(url)
        const json = await res.json()

        return json
}