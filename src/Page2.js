import React, { Component } from 'react';
import { Card,Button,message, Comment, Tooltip, List,Row, Col  } from 'antd';
import 'antd/dist/antd.css'; 
import './Page2.css';
import moment from 'moment';
import Page3 from './Page3.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
class Page2 extends Component {


  
  

  render() {
    const { Meta } = Card;
    const success = () => {
      message.success('Successfully');
    };
    const data = [
      {
        actions: [<span>Reply to</span>],
        author: 'comment1',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
          <p>xxxxx xxxxx xxx xxxxxxxxx xxxxxxxx xxxxx xxxxxxxxxxxxx xxxxxxx xxx xxxxxxxxxxxx xxxxxxx xxx xxxxxxxxxx  xxxxxxx xxx.</p>
        ),
        datetime: (
          <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().subtract(1, 'days').fromNow()}</span>
          </Tooltip>
        ),
      },
      {
        actions: [<span>Reply to</span>],
        author: 'Comment2',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
          <p>xxxxx xxxxx xxx xxxxxxxxx xxxxxxxx xxxxx xxxxxxxxxxxxx xxxxxxx xxx xxxxxxxxxxxx xxxxxxx xxx xxxxxxxxxx  xxxxxxx xxx.</p>
        ),
        datetime: (
          <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().subtract(2, 'days').fromNow()}</span>
          </Tooltip>
        ),
      },
    ];
    
   
    return (
    
      <div className="Page2">

<div className='title'>
      Workers List</div>
        <div className='card'>
        
        <div className='Card'style={{ background: '#ECECEC', padding: '30px', }}>
   
    <Row tpye="flex" justify="space-around" align="middle">
    <Col span={4} >
    <img className= "pi"src={require('./worker1.jpg' ) } />
    </Col>
    <Col span={6} push={2} >
      <div className= "te">
      <p>Name: Tiger</p>
      <p>Ranking: 4.4</p>
      <p>Contact: 177-****-1230</p>
      <p>Distance: 3.5km away from you</p>
      <Button onClick={success} type="primary" htmlType="submit"><Link to='/Page3/'>Pick</ Link></Button>
      </div>
      </Col>
      <Col span={12} push={2} >
      <div className= "co">
      <List
    className="comment-list"
    header={`${data.length} replies`}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <Comment
        actions={item.actions}
        author={item.author}
        avatar={item.avatar}
        content={item.content}
        datetime={item.datetime}
      />
    )}
  />
      </div>
      </Col>
   
      </Row>

    
  </div>



  <div className='Card'style={{ background: '#ECECEC', padding: '30px', }}>
   
   <Row tpye="flex" justify="space-around" align="middle">
   <Col span={4} >
   <img className= "pi"src={require('./worker2.jpg' ) } />
   </Col>
   <Col span={6}  push={2}>
     <div className= "te">
     <p>Name: Jake</p>
     <p>Ranking: 4.6</p>
     <p>Contact: 137-****-7890</p>
     <p>Distance: 5.8km away from you</p>
     <Button onClick={success} type="primary" htmlType="submit"><Link to='/Page4/'>Pick</ Link></Button>
     </div>
    
     </Col>
     <Col span={12}  push={2} >
     <div className= "co">
     <List
   className="comment-list"
   header={`${data.length} replies`}
   itemLayout="horizontal"
   dataSource={data}
   renderItem={item => (
     <Comment
       actions={item.actions}
       author={item.author}
       avatar={item.avatar}
       content={item.content}
       datetime={item.datetime}
     />
   )}
 />
     </div>
     </Col>

     </Row>

   
 </div>



 <div className='Card' style={{ background: '#ECECEC', padding: '30px', }}>
   
   <Row tpye="flex" justify="space-around" align="middle">
   <Col span={4} >
   <img className= "pi"src={require('./worker3.jpg' ) } />
   </Col>
   <Col span={6} push={2}>
     <div className= "te">
     <p>Name: Rena</p>
     <p>Ranking: 4.5</p>
     <p>Contact: 159-****-0808</p>
     <p>Distance: 6.6km away from you</p>
     <Button onClick={success} type="primary" htmlType="submit"><Link to='/Page5/'>Pick</ Link></Button>
     </div>
     </Col>
     <Col span={12} push={2} >
     <div className= "co">
     <List
   className="comment-list"
   header={`${data.length} replies`}
   itemLayout="horizontal"
   dataSource={data}
   renderItem={item => (
     <Comment
       actions={item.actions}
       author={item.author}
       avatar={item.avatar}
       content={item.content}
       datetime={item.datetime}
     />
   )}
 />
     </div>
     </Col>
     
     </Row>

   
 </div>


 <div className='Card' style={{ background: '#ECECEC', padding: '30px', }}>
   
   <Row tpye="flex" justify="space-around" align="middle">
   <Col span={4} >
   <img className= "pi"src={require('./worker4.jpg' ) } />
   </Col>
   <Col span={6} push={2}>
     <div className= "te">
     <p>Name: Crystal</p>
     <p>Ranking: 4.8</p>
     <p>Contact: 135-****-1515</p>
     <p>Distance: 10.8km away from you</p>
     <Button onClick={success} type="primary" htmlType="submit"><Link to='/Page6/'>Pick</ Link></Button>
     </div>
     </Col>
  
     <Col span={12} push={2} >
     <div className= "co">
     <List
   className="comment-list"
   header={`${data.length} replies`}
   itemLayout="horizontal"
   dataSource={data}
   renderItem={item => (
     <Comment
       actions={item.actions}
       author={item.author}
       avatar={item.avatar}
       content={item.content}
       datetime={item.datetime}
     />
   )}
 />
     </div>
     </Col>
 
     </Row>

   
 </div>
        {/* <div className='box'>
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

   <Button onClick={success}  type="primary" htmlType="submit"><Link to='/Page5/'>Pick</ Link></Button>*/}
{/* </div> */}
</div>



   </div>
    );
  }
}

export default Page2;
