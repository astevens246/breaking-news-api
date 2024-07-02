export function getNews(query = 'tesla', from_date = '2024-06-02', sortBy = 'publishedAt', page = 1, success, error) {
    const apiKey = 'caa94f99e23d40d29d1db0c88389230e';
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${from_date}&sortBy=${sortBy}&apiKey=${apiKey}&page=${page}`;

        fetch(url).then((res) => {
            return res.json()
        }).then((json) => {
            console.log(json)
        console.log(json.articles)
        success(json)
    }).catch((err) => {
        error(err)
    })
}