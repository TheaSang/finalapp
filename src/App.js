import React from 'react';
import logo from './logo.svg';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';
import Page5 from './Page5.js';


import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
// import { Cascader, Button,DatePicker,Input, Upload,  Icon} from 'antd';
import {
  Form, Select,  Input,
  Slider, Button, Upload, Icon,
  Row, Col,DatePicker,Cascader,message
} from 'antd';


import 'antd/dist/antd.css'; 



const { Option } = Select;

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

 
 
 
 
 
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
       

        <Form.Item
          label="Category[multiple]"
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select the problem category!', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="Please select the problem category!">
              <Option value="type1">tpye1</Option>
              <Option value="type2">type2</Option>
              <Option value="type3">type3</Option>
            </Select>
          )}
        </Form.Item>


       
       <Form.Item
          label="Problem"
        >
          
          <div className='problem'>
   
     <TextArea rows={4} />
     
          </div>
        </Form.Item>

        

        <Form.Item
           label="Photos" >
          <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
  </Dragger>
   
         
        
          {/* <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            )}
          </div> */}
        </Form.Item>
        <Form.Item
          label="Time block"
        >
          
          <div className='time'>
          
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      placeholder={['Start Time', 'End Time']}
      onChange={onChange2}
      onOk={onOk}
    />
   
     
          </div>
        </Form.Item>



        <Form.Item
          label="Location"
        >
          
          <div className='location'>
          
          <Cascader className= 'location' options={options} onChange1={onChange1} placeholder="Please select" />

          </div>
        </Form.Item>


       
        <Form.Item
          wrapperCol={{ span: 12, offset: 6 }}
        >
          {/* <Button  Link to="/Page3/" type="primary" htmlType="submit">Submit</Button> */}
          <Button type="primary" htmlType="submit"><Link to='/Page2/'>Submit</ Link></Button>
        </Form.Item>

 
      </Form>
    );
  }
}

const WrappedDemo = Form.create({ name: 'validate_other' })(Demo);

 ///////////////photo     
const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
  


///////////////////problem/////////////////////////////////
const { TextArea } = Input;



// //cascader/////////////////////////////////////////////////////////
const options = [{
  value: 'Shanghai',
  label: 'Shanghai',
  children: [{
    value: 'Pudong',
    label: 'Pudong',
    children: [{
      value: 'Zhangyang Road',
      label: 'Zhangyang Road',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange1(value) {
  console.log(value);
}
// //////////////////////////////////////////////////////
// //datepicker
const { RangePicker } = DatePicker;

function onChange2(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}



///////////////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Route exact path="/" component={WrappedDemo} />
          <Route path="/Page3/" component={Page3} />
          <Route path="/Page2/" component={Page2} />
          <Route path="/Page4/" component={Page4} />
          <Route path="/Page5/" component={Page5} />
          
        </div>
      </Router>
    </div>
  );
}

export default App;
