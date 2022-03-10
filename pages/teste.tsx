import { useSelector } from "react-redux"

export default function teste () {
    const {local} = useSelector((state: any) => state.allData)

    return <h1>{local}</h1>
}