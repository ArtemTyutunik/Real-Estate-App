const baseUrl  = 'https://bayut.p.rapidapi.com';


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1a9cfe59c2msh1ca8ebea9e1c574p1f1a13jsn242061e7997b',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
};

export const fetchSource = async url => {
    const response = await fetch(`${baseUrl}/${url}`, options);
    if (!response.ok) {
        throw new Error(`Could not fetch ${baseUrl}/${url}` +
            `, received ${response.status}`)
    }

    return await response.json()
}

export const getAllForRentProperties = () => new Promise((resolve, reject) => {
    fetchSource('properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4')
    .then(response => resolve(response))
    .catch(err => reject(err))
})

export const getAllForSaleProperties = () => new Promise((resolve, reject) => {
    fetchSource('properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4')
        .then(result => resolve(result))
        .catch(e => reject(e))
})

export const getPropertiesDetail = externalId => new Promise((resolve,reject) => {
    fetchSource(`properties/detail?externalID=${externalId}`)
        .then(response => resolve(response))
        .catch(e => reject(e))
})

