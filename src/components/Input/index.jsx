import { StyledInput } from './style';

export default function Input({ placeholder, type, event }) {
    return (
        <StyledInput onChange={event} placeholder={placeholder} type={type} />
    )
}