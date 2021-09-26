import React from "react"
//styles
import { ItemStyles } from '../styles/components/ItemStyles'

type ItemProps = {
    award: string,
    round?: number 
} 

const awardOptions = ["50K","100K","250K","500K","1M"]

const Item:React.FC<ItemProps> = ({award, round}) => {
    return(
        <ItemStyles active={ round && awardOptions[(round - 1)] === award ? true : false }>
            {award}
        </ItemStyles>
    )
}

export default Item
