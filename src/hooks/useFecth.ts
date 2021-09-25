import { useEffect, useState } from 'react'
//utils
import { fetchData } from '../utils/fetchData'


export const useFetch = (ctgNumber: string) => {
    const [loading, setLoading ] = useState(false)
    const [ error, setError] = useState(false)
    const [ data, setData ] = useState<QuestionState>({})

    const getData = async() => {
        setLoading(true)
        try {
            let info: QuestionState
            info = await fetchData(ctgNumber)
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
    },[ctgNumber])

    return {
        loading,
        error,
        data
    }

}