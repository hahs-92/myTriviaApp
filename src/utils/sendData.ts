const API_URL = process.env.REACT_APP_URL_API

export const sendData = async(userName: string ) =>  {
    const data = {
        first_name: userName
    }
    const response =  await fetch(`${API_URL}/winners`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response
}