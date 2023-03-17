import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import imageLogo from '../images/fits-logo.png';
 
const AddClothes = () => {
    return (
      <Grid>
      <div class="image-logo">
                    <Row>
                        <Col xs={12} >
                            <a href="/"> <img src={imageLogo} /></a>
                        </Col>
                    </Row>
                </div>
      <Row>
          <Col xs={12} >
              <p>Add Clothes</p>
          </Col>
      </Row>
  </Grid>
    );
}
 
export default AddClothes;