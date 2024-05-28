import { useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);

  const fetchFoodData = async () => {
    const response = await fetch(BASE_URL);

    const json = response.json();

    console.log(json);
  };

  fetchFoodData();

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardContainer>
        <FoodCards></FoodCards>
      </FoodCardContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: #323334;
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search input {
    background-color: transparent;
    border: 1px solid orange;
    color: white;
    font-size: 16px;
    height: 40px;
    border-radius: 5px;
    padding: 0 10px;
  }

  .search input::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

const Button = styled.button`
  border-radius: 5px;
  background: #fb8500;
  padding: 6px 12px;
  border: none;
  color: white;
`;

const FoodCardContainer = styled.section`
  height: calc(100vh - 170px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div``;
