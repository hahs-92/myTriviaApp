import { useEffect, useState } from 'react'
//utils
import { fetchWinners } from '../utils/fetchData'

export const useGetWinners = () => {
    const [loading, setLoading ] = useState(false)
    const [ error, setError] = useState(false)
    const [ data, setData ] = useState([])

    const getData = async() => {
        setLoading(true)
        try {
            const info = await fetchWinners()
            setData(info)
            setLoading(false)
            setError(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
      getData()
    },[])

    return {
        loading,
        error,
        data
    }
}