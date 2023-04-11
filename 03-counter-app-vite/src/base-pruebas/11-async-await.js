

export const getImagen = async() => {

    try {

        const apiKey = 'NqxRxGZV0Mj2NemgMjFzOSxIbROhjx6I';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'Nose encontro la img';
    }
    
    
    
}

 getImagen();



