import React from "react"
//styles
import { CardWinnersWrapper } from '../styles/components/CardWinnersStyles'
//hooks
import { useGetWinners } from '../hooks/useGetWinners'
//components
import Item from './Item'

type CardWinnersProps = {
    children?: React.ReactNode,
    round: number
    userName: string
}

const CardWinners: React.FC<CardWinnersProps> = ({children, round, userName}) => {
    const { data } = useGetWinners()
    const winners = [...data].reverse()
    return(
        <CardWinnersWrapper>
            <section className='TitleWrapper'>
                <h2>Winners 1M</h2>
            </section>

            <section className='ContentWrapper'>
               <ul>
                   {
                        data.length && winners.map((winner, index) => (
                           <Item key={`${winner}-${index}`} award={winner}/>
                        ))
                   }
               </ul>
            </section>

            <section className='ButtonWrapper'>
                { children }
            </section>
        </CardWinnersWrapper>
    )
}

export default CardWinners
