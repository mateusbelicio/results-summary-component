import { GlobalStyle } from './globalStyles';
import { MainContainer } from './layout/MainContainer';
import { Header } from './components/Header';
import { Summary } from './components/Summary';

import data from './data/data.json';

export const App = () => {
  const totalScore = Math.round(data.reduce((acc, cur) => acc + cur.score, 0) / data.length);

  return (
    <MainContainer>
      <GlobalStyle />
      <Header totalScore={totalScore} />
      <Summary data={data} />
    </MainContainer>
  );
};
