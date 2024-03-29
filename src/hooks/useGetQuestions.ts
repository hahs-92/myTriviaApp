import { useEffect, useState } from 'react'
//utils
import { fetchQuestionsByCategory } from '../utils/fetchData'


export const useGetQuestions = (ctgNumber: string, query: string) => {
    const [loading, setLoading ] = useState(false)
    const [ error, setError] = useState(false)
    const [ data, setData ] = useState<QuestionState>({})

    const getData = async() => {
        if( Number(ctgNumber) > 5) return;
        setLoading(true)
        try {
            let info: QuestionState
            info = await fetchQuestionsByCategory(ctgNumber, query)
            setData(info)
            setLoading(false)
            setError(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
      ( Number(ctgNumber) > 0 && Number(ctgNumber) < 6 ) && getData();
      // eslint-disable-next-line 
    },[ctgNumber, query])

    return {
        loading,
        error,
        data
    }

}