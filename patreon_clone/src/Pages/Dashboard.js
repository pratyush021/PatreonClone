import LandingBase from "../components/LandingBase";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Dashboard=()=>{
    return (
        <LandingBase> 
             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Podcasters</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Video Creators</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Communities </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Writers and Journalists  </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Gaming Creators  </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">Tutorials and Education  </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              List top podcasts here
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              List top Video Creators Here
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              List communities here
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              List Writers and Journalists here
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              List Gaming creators here
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              List tutorials here
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </LandingBase>
    )

}

export default Dashboard; 