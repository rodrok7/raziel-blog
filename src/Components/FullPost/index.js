import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

import './style.css'

function FullPost(props) {
    let { imgUrl, title, content } = props.postData
    return (
        <Card className="mb-3 border rounded shadow">
            <div className="preview-image" style={{ backgroundImage: `url(${imgUrl ? imgUrl : `https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081`})` }}></div>
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>{content}</CardText>
            </CardBody>
        </Card>
    )
}

export default FullPost