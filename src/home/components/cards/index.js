import React from 'react';
import { Card, CardImg, CardText} from 'reactstrap';
import {connect} from 'react-redux';
import axios from 'axios';

import {AnimePop} from '../../../public/actions/getAnime';

class Cards extends React.Component{
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res=>{
      this.props.dispatch(AnimePop(res.data))
    })
    .catch(err=>{
      alert(err)
    })
  }

  render(){
    return (
      this.props.cards.card.map((item,key)=>
      <section id="popular">
        <div style={{display: 'flex'}}>
            <Card style={{height: 300, width: 200, marginRight: 10, marginTop: '20'}}>
            <CardImg top height="265" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardText style={{fontSize: 20, alignSelf: 'center'}}>{item.title}</CardText>
            </Card>
        </div>
      </section>
      )
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    cards: state.card
  }
}

export default connect (mapStateToProps)(Cards);
