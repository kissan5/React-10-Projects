import styled from "styled-components";

const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 100px;
    margin: 0;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }
`;
