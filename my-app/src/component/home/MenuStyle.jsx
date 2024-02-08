import styled from "styled-components";
import {
  BORDER_RADIUS_20,
  BACKGROUND_COLOR,
  WIDTH
} from "../../constants/styleconstant";

export const MenuWrapper = styled.div`
  width: ${WIDTH};
  height: 22rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  >:nth-child(n){
    display: flex;
    justify-content: center;
    align-items: center;
  }
  >:nth-child(1){
    grid-area: 1/1/2/3;
  }
`;

export const MenuItem = styled.div`
  width: calc((${WIDTH} - 1rem)/2);
  height: calc((${WIDTH} - 1rem)/2);
  border-radius: ${BORDER_RADIUS_20};
  background-color: ${BACKGROUND_COLOR};
  position: relative;
  gap: 3.5rem;
  >:first-child{
    position: absolute;
    top: 0.5rem;
    right: 0.3rem;
  }
`;

export const Image = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const RankSection = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const LeagueType = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
`;

export const LeagueRank = styled.div`
  width: 100%;
  height: 1.5rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  font-size: 1rem;
  >:nth-child(n){
    display: flex;
    align-items: center;
    justify-content: start;
  }
  >:nth-child(1){
    font-size: 1.5rem;
    font-weight: 700;
  }
  >:nth-child(2){
    width: 5rem;
    font-weight: 500;
    img{
      width: 1.5rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
  }
`;