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
 
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct card box
 import api from '../../../api/APIService'
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import AuthService from '../../../api/APIService';
 
 export default class CreateTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            student:{
                firstName:"",
                middleName:"",
                lastName:"",
                fatherName:"",
                motherName:"",
                mobileNum:"",                
                dob:"",
                sex:"",
                address1:"",
                address2:"",                
                pincode:""
                               
            }      
          
           
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
        this.api = new AuthService();
        
        
        
       
      }
      handleChange(event) {
        const { student } = { ...this.state };
        const currentState = student;
        const { name, value } = event.target;
        currentState[name] = value;
      
        this.setState({ student: currentState });
        console.log("onchange"+JSON.stringify(this.state.student));
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
         formData.append('file', this.state.file);
         formData.append('studJson',JSON.stringify(this.state.student));
        console.log("Test"+JSON.stringify(this.state.student));
        this.api.addStudent(formData).then((response) => {
          console.log(response);
        })
      }

      uploadSingleFile=(event) =>{
        
        this.setState({file:event.target.files[0], showUploadButton:true}, () =>{
          // file has been selected
          console.log(this.state.file)
        })
    }
 
     render() {
         return (
             <div className="formelements-wrapper">
                 <PageTitleBar title={<IntlMessages id="sidebar.createStudent" />} match={this.props.match} />
                 <div className="row">
                     <div className="col-sm-12 col-md-12 col-xl-8">
                         <RctCollapsibleCard heading="Create New Sturdent">
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
                                 <FormGroup>
                                     <Label for="Text">Guardian Name</Label>
                                     <Input type="text" name="guardianName" id="guardianName" placeholder="Guardian Name" value={this.state.guardianName} onChange={this.handleChange}/>
                                 </FormGroup>
                                 {/* <FormGroup>
                                     <Label for="Password">Password</Label>
                                     <Input type="password" name="password" id="Password" placeholder="password" />
                                 </FormGroup> */}
                                 <FormGroup>
                                     <Label for="Text">Address1</Label>
                                     <Input type="text" name="address1" id="address1" placeholder="Address 1" value={this.state.address1} onChange={this.handleChange}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Address2</Label>
                                     <Input type="text" name="address2" id="address2" placeholder="Address 2" value={this.state.address2} onChange={this.handleChange}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Address1</Label>
                                     <Input type="text" name="address3" id="address3" placeholder="Address 3" value={this.state.address3} onChange={this.handleChange}/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label for="Text">Pincode</Label>
                                     <Input type="text" name="pincode" id="pincode" placeholder="Pincode" value={this.state.pincode} onChange={this.handleChange}/>
                                 </FormGroup>
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
                                 <FormGroup>
									<Label for="File">File</Label>
									<Input type="file" name="file" id="File" onChange={this.uploadSingleFile} />
									<FormText color="muted">
										This is some placeholder block-level help text for the above input.
                                        Its a bit lighter and easily wraps to a new line.
                                    </FormText>
								</FormGroup>
                                 
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
 