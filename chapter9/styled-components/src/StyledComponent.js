import styled, {css} from 'styled-components'

const Box = styled.div`

    background : ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    `

const Button = styled.button`
    background: white;
    color:black;
    border-radius:4px;
    padding:0.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;
    
    &:hover {
        background : rgba(255,255,255,0.9)
    }
    
    ${props => 
        props.inverted && 
        css`
            background:none;
            border: 2px solid white;
            color: white;
            &:hover {
            background : white;
            color : black;
            }
        `}
        
    & + button {
        margin-left:1rem;
    }`

const StyledComponent = () => (
    <Box >
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
)

export default StyledComponent