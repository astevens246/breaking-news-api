export async function getNews(){
    const url = 'https://newsnow.p.rapidapi.com/newsv2';
const options = {
    method: 'POST',
    headers: {
        'x-rapidapi-key': 'a3ce3b3a5amshb9e3612c707cb13p128713jsn758974e4e1b9',
        'x-rapidapi-host': 'newsnow.p.rapidapi.com',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: 'climate change',
        time_bounded: true,
        from_date: '01/02/2022',
        to_date: '05/06/2024',
        location: 'us',
        language: 'en',
        page: 1
    })
};

try {
    const response = await fetch(url, options);
    const result = await response.json(); 
    console.log(result);
} catch (error) {
    console.error(error);
}
}

