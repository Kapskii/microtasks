import s from "./Tablet.module.css"

type CarType = {
    topCars: CarsType[]
}

export type CarsType = {
    manufacturer: string
    model: string
}

export const Tablet = (props: CarType) => {
    return ( 
        <table border={1} className={s.tablet}>
        {props.topCars.map(el => {
            return (
                <tr>
                    <th>{el.manufacturer}</th>
                    <th>{el.model}</th>
                </tr>
            )
        })}
        </table>
    )
}