import request from 'superagent';



const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';


export async function getPokedex(search, page, option) {

    const searchString = (search) ? `${option}=${search.toLowerCase()}` : '';
    const pageString = (page) ? `&page=${page}` : '';

    const newUrl = URL + '?' + searchString + pageString;

    const data = await request.get(newUrl);
    return data;
};

export async function getPokeDetail(name) {
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`)
  
}