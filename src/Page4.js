import React, { Component } from 'react';
import { Map,Marker ,InfoWindow,Spin, Alert, } from 'react-amap';
import { Collapse,Button,Popconfirm, message, notification } from 'antd';
import 'antd/dist/antd.css'; 


class Page4 extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     center: { longitude: 115, latitude: 30 }
  //   };
  // }
  // changeCenter(){
  //   this.setState({
  //     center: {
  //       longitude: 115 + Math.random() * 10,
  //       latitude: 30 + Math.random() * 10,
  //     }
  //   });
  // }

  
  constructor() {
    super();
    this.state = {
      visible: true,
      value: 1,
      position: {
        longitude: 120,
        latitude: 30
      },
      offset: [0, 0],
      size: {
        width: 200,
        height: 140,
      },
    }
    this.windowEvents = {
      created: (iw) => {console.log(iw)},
      open: () => {console.log('InfoWindow opened')},
      close: () => {console.log('InfoWindow closed')},
      change: () => {console.log('InfoWindow prop changed')},
    }
  }
  
  changeOffset(){
    this.setState({
      offset: [Math.random() * 10, Math.random() * 10]
    })
  }
  
  resetOffset(){
    this.setState({
      offset: [0, 0]
    })
  }
  
  changeSize(){
    this.setState({
      size: {
        width: 200 + Math.random() * 20,
        height: 140 + Math.random() * 20,
      }
    })
  }
  
  changeValue(){
    this.setState({
      value: this.state.value + 1,
    });
  }

  toggleVisible() {
    this.setState({
      visible: !this.state.visible
    })
  }
  
   

  
  randomPosition() {
    this.setState({
      position: {
        longitude: 120 + Math.random() * 20,
        latitude: 30 + Math.random() * 20,
      }
    })
  }
  



  render() {
    const html = `<div><h1>The worker is on his way </h1></div>`;
    const styleB = {
      background: '#000',
      color: '#fff',
      padding: '5px'
    }
    const styleC = {
      background: `url('http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '30px',
      height: '40px',
      color: '#000',
      textAlign: 'center',
      lineHeight: '40px'
    }
    const Panel = Collapse.Panel;

    function confirm(e) {
      console.log(e);
      message.success('You cancel your order successfully');
    }
    
    function cancel(e) {
      console.log(e);
      message.error('Click on No');
    }
    const openNotification1 = () => {
      notification.open({
        message: 'Notification Title',
        description: 'You are calling Jake.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };
    const openNotification2 = () => {
      notification.open({
        message: 'Notification Title',
        description: 'You are calling Customer Servise.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };

    
    
    

//     console.log('hi')
    return (
      <div className="Page4">

<div style={{width: '100%', height: '500px'}}>

        <Map>
        
    
  
          <InfoWindow
            position={this.state.position}
            visible={this.state.visible}
            isCustom={false}
            content={html}
            size={this.state.size}
            offset={this.state.offset}
            events={this.windowEvents}
          />
        
        </Map>
       
     
      </div>
      <Collapse accordion>
    <Panel header="Cancel (You can canael in 10 minutes)" key="1">
    <Popconfirm title="Are you sure cancel this order?" onCancel={cancel} onConfirm={confirm}  okText="Yes" cancelText="No">
    <a href="#">cancel</a>
  </Popconfirm>
    </Panel>
    <Panel header="Contact Worker" key="2">
    <Button type="primary" onClick={openNotification1}>Call</Button>
    </Panel>
    <Panel header="Contact Customer Service" key="3">
    <Button type="primary" onClick={openNotification2}>172-****-1130</Button>
    </Panel>
    <Panel header="Worker information " key="4">

      <p>Name: Crystal</p>
      <p>Ranking: 4.8</p>
      <p>Contact: 135-****-1515</p>
      <p>Distance: 1500m away from you</p> 
    </Panel>
  </Collapse>


      
</div>

     
      
    );
  }
}

export default Page4;
