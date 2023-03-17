import React from 'react';
import imageLogo from '../images/fits-logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
const Day = ({month, day, year}) => {
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
          <Col xs={4} >
            <a href={`/Calendar/`}> &nbsp; &lt;  &nbsp; </a>
          </Col>
          <Col xs={4} >
              <p>{months[month]} {day}, {year}</p>
          </Col>
          <Col xs={4} >
          
          </Col>
      </Row>
  </Grid>
    );
}
 
export default Day;