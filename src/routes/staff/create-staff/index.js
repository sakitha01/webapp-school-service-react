/**
 * Form Elemets
 */
 import React, { Component } from 'react';
 import {
     Button,
     Form,
     FormGroup,
     Label,
     Input,
     FormText,
     Col,
     FormFeedback
 } from 'reactstrap';
 import _ from 'lodash';
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct card box
 import api from '../../../api/APIService'
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import AuthService from '../../../api/APIService';
 import Address from '../create-staff/Address';
 export default class CreateStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            staff:{
                firstName:"",
                middleName:"",
                lastName:"",
                fatherName:"",
                motherName:"",
                mobileNumber:"",                
                dob:"",
                sex:"",
                addressDetails:{
                    address1:"",
                    address2:"",
                    city:"",
                    state:"",
                    country:"",
                    pincode:""
                },
                addres: null 
                             
            } 
           
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
        this.api = new AuthService();
        
        
        
       
      }
      handleChange(event) {
        console.log("parent"+event.target.value);
        const { staff } = { ...this.state };
        const currentState = staff;
        const { name, value } = event.target;
        currentState[name] = value;

        
        this.setState({ staff: currentState });
        console.log("onchange"+JSON.stringify(this.state.staff));
      }
      handleChangeaddress(type, name, event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            staff: {
            ...this.state.staff,
            [type]:{
              ...this.state.staff[type],
              [name]: value,
            }
          }
        });
         console.log(type,name,value);
      }
      handleSubmit(event) {
        console.log("inside parent")
        event.preventDefault();
        const formData = new FormData();
         formData.append('file', this.state.file);
         formData.append('teachJson',JSON.stringify(this.state.staff));
        console.log("Test"+JSON.stringify(this.state.staff));
        this.api.addStaff(formData).then((response) => {
          console.log(response);
        })
      }

      uploadSingleFile=(event) =>{
        
        this.setState({file:event.target.files[0], showUploadButton:true}, () =>{
          // file has been selected
          console.log(this.state.file)
        })
    }
 
    handleCallback = (childData) =>{
        console.log("callback"+childData);
        console.log("kavi1"+JSON.stringify(childData))
        this.setState({
            staff:{
                ...this.state.staff,
                addres:childData,
                
            }
        })       
        console.log("kavi2"+JSON.stringify(this.state))
    }
     render() {
        const {addressDetails,staff} = this.state;
         return (
             <div className="formelements-wrapper">
                 <PageTitleBar title={<IntlMessages id="sidebar.createStaff" />} match={this.props.match} />
                 <div className="row">
                     <div className="col-sm-12 col-md-12 col-xl-8">
                         <RctCollapsibleCard heading="Create New Staff">
                             <Form>
                                 <FormGroup>
                                     <Label for="Text">First Name</Label>
                                     <Input type="text" name="firstName" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Last Name</Label>
                                     <Input type="text" name="lastName" id="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Father Name</Label>
                                     <Input type="text" name="fatherName" id="fatherName" placeholder="Father Name" value={this.state.fatherName} onChange={this.handleChange}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Mother Name</Label>
                                     <Input type="text" name="motherName" id="motherName" placeholder="Mother Name" value={this.state.motherName} onChange={this.handleChange}/>
                                 </FormGroup>
                                 {/* <FormGroup>
                                     <Label for="Text">Address1</Label>
                                     <Input type="text" name="address1" id="address1" placeholder="Address 1" value={this.state.staff.addressDetails.address1} onChange={this.handleChangeaddress.bind(this,"addressDetails","address1")}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Address2</Label>
                                     <Input type="text" name="address2" id="address2" placeholder="Address 2" value={this.state.staff.addressDetails.address2} onChange={this.handleChangeaddress.bind(this,"addressDetails","address2")}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">City</Label>
                                     <Input type="text" name="city" id="city" placeholder="city" value={this.state.staff.addressDetails.city} onChange={this.handleChangeaddress.bind(this,"addressDetails","city")}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">State</Label>
                                     <Input type="text" name="State" id="state" placeholder="State" value={this.state.staff.addressDetails.state} onChange={this.handleChangeaddress.bind(this,"addressDetails","state")}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Country</Label>
                                     <Input type="text" name="Country" id="country" placeholder="country" value={this.state.staff.addressDetails.country} onChange={this.handleChangeaddress.bind(this,"addressDetails","country")}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Pincode</Label>
                                     <Input type="text" name="Pincode" id="pincode" placeholder="pincode" value={this.state.staff.addressDetails.pincode} onChange={this.handleChangeaddress.bind(this,"addressDetails","pincode")}/>
                                 </FormGroup> */}
                               
                                 <FormGroup>
									<Label for="Email">Email</Label>
									<Input type="email" name="emailId" id="emailId" placeholder="Email address" value={this.state.emailId} onChange={this.handleChange}/>
								</FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Mobile Number</Label>
                                     <Input type="text" name="mobileNum" id="mobileNum" placeholder="Mobile Number" value={this.state.mobileNum} onChange={this.handleChange} />
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Alternate Mobile Number</Label>
                                     <Input type="text" name="altMobileNum" id="altMobileNum" placeholder="Alternate Mobile Number" value={this.state.altMobileNum} onChange={this.handleChange}/>
                                 </FormGroup>
                                 <FormGroup>
									<Label for="Date">Date Of Birth</Label>
									<Input type="date" name="dob" id="dob" placeholder="Date Of Birth" value={this.state.dob} onChange={this.handleChange}/>
								</FormGroup>
                                <FormGroup tag="fieldset">
                                     <legend>Sex</legend>
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="radio" name="sex" id="sex" value="Male" onChange={this.handleChange}/>{' '}
                                             Male
                         </Label>
                                     </FormGroup>
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="radio" name="sex" id="sex" value="Female" onChange={this.handleChange}/>{' '}
                                             Female
                         </Label>
                                     </FormGroup>
                                     {/* <FormGroup check disabled>
                                         <Label check>
                                             <Input type="radio" name="radio1" disabled />{' '}
                                             Option three is disabled
                         </Label>
                                     </FormGroup> */}

                                 </FormGroup>   
                                 <Address 
                                 handleChange={this.handleChange}
                                 onSubmit={this.handleSubmit}
                                 parentCallback = {this.handleCallback}/>                              
                                 <Button type="submit" color="primary" onClick={this.handleSubmit}>Submit</Button>
                                 <Button color="primary" onClick={this.handleClear}>Clear</Button>
                             </Form>
                         </RctCollapsibleCard>
                         
                     </div>
                     
                 </div>
             </div>
         );
     }
 }
 