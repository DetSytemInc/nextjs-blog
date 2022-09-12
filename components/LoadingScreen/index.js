import { Container, Row, Col } from '../Layout';
import loadingScreenStyles from './LoadingScreen.styles';
import theme from '../../constants/theme';

function LoadingScreen() {
  return (
    <div css={loadingScreenStyles(theme)}>
      <Container>
        <Row>
        <Col fraction={1}>
            <div className="progressbar">
              <div className="stylization" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoadingScreen;
