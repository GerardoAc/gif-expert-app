export const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=1x4v3YgePN91WY65JynVmnWxZ1tVkbGv&q=${category}&limit=1`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map((img) => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        alert(gifs.url);
        console.log(gifs);
        return gifs;
    } catch (error) {
        console.error('Error fetching gifs:', error);
        return []; // Devuelve un array vacío en caso de error
    }
}
