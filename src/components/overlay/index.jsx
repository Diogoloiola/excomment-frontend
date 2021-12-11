import { Overlay as OverlayStyled, Text } from './style.js'

export default function Overlay( { text } )
{
    return (
        <OverlayStyled>
            <Text>{text}</Text>
        </OverlayStyled>
    )
}