import CardGameContainer from "./CardGameContainer"
import MainScreen from "./MainScreen"

export default function DisplayCurrentContent({ data, buttonHandlers ,isGameActive }) {

    const displayContent = isGameActive
        ? <CardGameContainer data={ data } />
        : <MainScreen onClick={ buttonHandlers } />

    return (
        <>
            {displayContent}
        </>
    )
}