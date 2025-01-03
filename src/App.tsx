import LeftSide from './components/Side/LeftSide';
import RightSide from './components/Side/RightSide';
import { Container } from './styles/StyleModule';

function App() {
  return (
    <div className="App">
      <Container>
        <LeftSide />
        <RightSide />
      </Container>
    </div>
  );
}

export default App;
