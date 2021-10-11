import React, {Fragment} from 'react';
import PropTypes, { func } from 'prop-types';
import { Button, Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';
import generic1 from '../assets/img/generic/1.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import FalconEditor from '../components/common/FalconEditor';
// import buttonToolbarCode from '../components/bootstrap-components/Buttons'
import ButtonGroup from '../../node_modules/reactstrap/es/ButtonGroup'

export const CardSlide = ({onClick, user, onLogin, onLogout, onCreateAccount }) => {

const [title, setState] = useState([]);


useEffect(() => {
    fetchData();
}, []);
// comment 2.0


const fetchData = (index) => {
    axios.get('http://localhost:3000/cards')
    .then((response) => {
        console.log(response)
        const myCard = response.data;
        setState(response.data[index].title);
    })
    .catch(error => console.log({error}))
};
    return (
    <div> 
        <Card style={{width: '20rem'}}>
        <CardImg src={generic1} top />
        <CardBody>
            <CardTitle tag="h5">
                {title}
            </CardTitle>
            <CardText tag="p">
            Some quick example text to build on the card
            title and make up the bulk of the card's
            content.
            </CardText>
            <Fragment> 
            <ButtonGroup>
            <div>
            <Button onClick = {() => fetchData(0)}>1</Button>
            </div>
            <h1>{" "}</h1>
            <div>
            <Button onClick = {() => fetchData(1)}>2</Button>
            </div>
            <h1>{" "}</h1>
            <div>
            <Button onClick = {() => fetchData(2)}>3</Button>
            </div>
            <h1>{" "}</h1>
            <div>
            <Button onClick = {() => fetchData(3)}>4</Button>
            </div>
            <h1>{" "}</h1>
            <div>
            <Button onClick = {() => fetchData(4)}>5</Button>
            </div>
            </ButtonGroup>
            </Fragment>
        </CardBody>
        </Card>
        </div>
        );
}
        



CardSlide.propTypes = {
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
    onClick: func,
  };
  
  CardSlide.defaultProps = {
    user: null,
    onClick: null,
  };