import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image">
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}> Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 90vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;

  .image img {
    width: 300px;
    height: 290px;
  }

  .content h1 {
    font-size: 80px;
    white-space: nowrap;
  }
`;
