import * as React from 'react'

import { Grid, Row, Col } from 'react-flexbox-grid';
import imageLogo from '../images/fits-logo.png';
import {useNavigate} from 'react-router-dom';
 
const Error = () => {
    const navigate = useNavigate();
     const sendHome = () => navigate('/Home');
    return (
      <Grid>
      <div class="image-logo">
                    <Row>
                        <Col xs={12} >
                        <a onClick={sendHome} > <img src={imageLogo} /></a>
                        </Col>
                    </Row>
       </div>
      <Row>
          <Col xs={12} >
              <p>Error 404</p>
          </Col>
      </Row>
  </Grid>
    );
}
 
export default Error;