import{
    Container,
    Row,
    Col
} from 'reactstrap'

import './style.css'

function Home(){
    return(
        <Row className="Home">
            <Col xs="12" className="p-0">
                <div className="home-hero d-flex flex-column justify-content-center text-white align-items-center text-center w-100">
                    <h1>Bienvenidos al blog de Raziel</h1>
                    <h2>Aquí hablamos de todo menos de cosas improtantes XD</h2>
                </div>
            </Col>
        </Row>
    )
}

export default Home