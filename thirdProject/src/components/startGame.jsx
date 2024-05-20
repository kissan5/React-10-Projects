import styled from "styled-components";

const startGame = () => {
  return (
    <Container>
      <img src="images/dices.png" />
      <div>
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default startGame;

const Container = styled.div`
  max-width: 1180px;
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  min-width: 220px;
  border: none;
  border-radius: 5px;
  background: #000;
`;
