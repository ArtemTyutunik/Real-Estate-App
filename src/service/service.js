const baseUrl  = 'https://bayut.p.rapidapi.com';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f006ee9fddmsh5db5f1d8c97c3dcp19d57bjsne6710d3aae6c',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
};



const fetchSource = async url => {
    const response = await fetch(`${baseUrl}/${url}`, options);
    if (!response.ok) {
        throw new Error(`Could not fetch ${baseUrl}/${url}` +
            `, received ${response.status}`)
    }

    return await response.json()
}

export const getAllForRentProperties = () => new Promise((resolve, reject) => {
    fetchSource('properties/list')
    .then(response => resolve(response))
    .catch(err => reject(err))
})
