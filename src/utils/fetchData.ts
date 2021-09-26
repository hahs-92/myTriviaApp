//uutils
import { ramdomNumber } from './ramdonNumber'
import { shuffleArray } from './sortRamdom'
const API_URL = process.env.REACT_APP_URL_API

export const fetchQuestionsByCategory = async(ctgNumber: string, query: string) =>  {
    const ctg = ctgNumber || '1'
    const data= await (await fetch(`${API_URL}/${query}/${ctg}`)).json()
    const {
        category_name,
        difficulty: { name_difficulty },
        questions
    } = data

    const random = ramdomNumber(questions.length + 1)

    return {
        category: category_name,
        difficulty: name_difficulty,
        question: questions[random]["question"],  
        answers: shuffleArray([
            questions[random]["correct_answer"],
            ...questions[random]["incorrect_answers"]
        ]),
        correct_answer: questions[random]["correct_answer"]
    }
}

export const fetchAwares = async() =>  {
    const data= await (await fetch(`${API_URL}/awares`)).json()

    return data.map( (item:any) => item["name_award"])
}

export const fetchWinners = async() =>  {
    const data= await (await fetch(`${API_URL}/winners`)).json()

    return data.map( (item:any) => item["first_name"])
}