const baseUrl = '127.0.0.1:3000/api/v1/';

async function getMovies() {
    try {
        const movies = await fetch(`${baseUrl}movies`);
        const result = await movies.json();

        console.log(result.data);
    } catch (error) {
        
    }
}

getMovies();