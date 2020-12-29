const postData = async (url, data) => {
    const rest = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await rest.json();
};
const getRezsurs = async (url) => {
    const rest = await fetch(url);

    if (!rest.ok) {
        throw new Error(`not feach ${utl} and status : ${url.status}`);
    }
    return await rest.json();
};

export {postData};
export {getRezsurs};

