import './index.css';

interface ClockDigitProps{
    digit: number,
    
}
const ClockDigit = ({digit}: ClockDigitProps) => {
    return (
        <div>{digit}</div>
    )
}

export default ClockDigit;