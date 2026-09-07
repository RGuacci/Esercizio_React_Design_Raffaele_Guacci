export const getAnimes = async () => {
    const AnimesResponse = await fetch("https://api.jikan.moe/v4/top/anime?limit=20");
    const Animesdata = await AnimesResponse.json();
    return Animesdata.data; //Devo fare questo perchè l'endpoint che ho scelto non restituisce direttamente un array
}

export const getSingleAnime = async ( {params} ) => {
    const AnimeResponse = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
    const Animedata = await AnimeResponse.json();
    return Animedata.data ; 
}

