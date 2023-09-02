const form = document.querySelector('.js-search-form');

// fetch('https://api.weatherstack.com/current?access_key=07ad4dfe84ecb73379e406587b23965b&query=New York')
// .then(response=>response.json())
// .then(console.log())

function getArticles(query){
    let url = `https://newsapi.org/v2/everything?q=${query}`
    const options = {
        headers: {
            'X-Api-Key': '07ad4dfe84ecb73379e406587b23965b'
        }
    };
    return fetch(url,options)
    .then(then => then.json())
};

form.addEventListener('submit', onSearchQuery);
function onSearchQuery(event){
    event.preventDefault();
    const query = event.currentTarget.elements.query.value;
    getArticles(query).then(articles => {
        console.log(articles[0].sourse.name);
    })
};