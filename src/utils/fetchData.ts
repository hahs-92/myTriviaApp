//uutils
import { ramdomNumber } from './ramdonNumber'
import { shuffleArray } from './sortRamdom'
const API_URL = "https://mytriviaapi.herokuapp.com" 

export const fetchData = async(ctgNumber: string) =>  {
    const ctg = ctgNumber || '1'
    const data= await (await fetch(`${API_URL}/categories/${ctg}`)).json()
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