import React, { Component } from 'react';
import { Card,Button,message } from 'antd';
import 'antd/dist/antd.css'; 
import './Page2.css';
import Page3 from './Page3.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
class Page2 extends Component {


  
  

  render() {
    const { Meta } = Card;
    const success = () => {
      message.success('Successfully');
    };
    
   
    return (
    
      <div className="Page2">

<div className='title'>
      Workers List</div>
        <div className='card'>
        
        <div className='box'>
        <Card
    hoverable
    style={{ width: 360 }}
    cover={<img src={require('./worker1.jpg')} />}
  >
    <Meta
      title="Name: Tiger;   Ranking: 4.4"
      description="Contact: 177-****-1230;   Distance: 3.5km away from you"
    
    />
  </Card>,
 
  <Button onClick={success} type="primary" htmlType="submit"><Link to='/Page3/'>Pick</ Link></Button>
</div>


<div className='box'>
        <Card
    hoverable
    style={{ width: 360}}
    cover={<img src={require('./worker2.jpg')} />}
  >
    <Meta
    title="Name: Jake;   Ranking: 4.6"
    description="Contact: 137-****-7890;   Distance: 5.8km away from you"
  
    />
  </Card>,

 
  <Button onClick={success}  type="primary" htmlType="submit"><Link to='/Page4/'>Pick</ Link></Button>
</div>

<div className='box'>
        <Card
    hoverable
    style={{ width: 360}}
    cover={<img src={require('./worker3.jpg')} />}
  >
    <Meta
      title="Name: Rena;   Ranking: 4.5"
      description="Contact: 159-****-0808;Distance: 6.6km away from you"
    />
  </Card>,


  <Button onClick={success}  type="primary" htmlType="submit"><Link to='/Page5/'>Pick</ Link></Button>
</div>
<div className='box'>
        <Card
    hoverable
    style={{ width: 360}}
    cover={<img src={require('./worker4.jpg')} />}
  >
    <Meta
     title="Name: Crystal;Ranking: 4.8"
     description="Contact: 135-****-1515;Distance: 10.8km away from you"
    />
  </Card>,

  <Button onClick={success}  type="primary" htmlType="submit"><Link to='/Page6/'>Pick</ Link></Button>
</div>
</div>



      </div>
    );
  }
}

export default Page2;