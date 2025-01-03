import * as S from './styles';

const Description = () => {
 return (
    <S.Container>
      <S.VerticalText>2025</S.VerticalText>
      <S.DetailWrap>
        <S.StatsWrap>
          <S.Stats>
            <S.StrokeText>1500+</S.StrokeText>
            <S.Text>participants</S.Text>
          </S.Stats>
          <S.Stats>
            <S.StrokeText>21.1KM</S.StrokeText>
            <S.Text>distance</S.Text>
          </S.Stats>
          <S.Stats>
            <S.StrokeText>10K</S.StrokeText>
            <S.Text>prize fund</S.Text>
          </S.Stats>
        </S.StatsWrap>
        <S.Follow>FOLLOW US</S.Follow>
        <p>
          <S.Text>INSTAGRAM</S.Text>
          <S.Text>FACEBOOK</S.Text>
          <S.Text>YOUTUBE</S.Text>
        </p>
      </S.DetailWrap>
    </S.Container>
 );
}

export default Description;