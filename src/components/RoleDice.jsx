
import styled from "styled-components";


const RoleDice = ({currentDice , roleDice }) => {
    // const [currentDice, setCurrentDice ] = useState(1);


  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src= {`/images/dice_${currentDice}.png`}alt="dice 1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice {
        cursor: pointer;

    }
    .dice img {
        height: 170px;
    }
    p {
        font-size: 13px;
    }
`;
