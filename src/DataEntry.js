import React, { Component } from 'react';
import {Col, Row, Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import './DataRender'


// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import DataRender from './DataRender';


export default class FormData extends Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            fullName:  '',
            address: '',
            address2: '',
            city:  '',
            province: '', 
            postalCode: '',
            check: ''
            
        };
      }

      selectProvince (val) {
        this.setState({ province: val });
      }
      

      readName = e =>{
        //Update the state object
        this.setState({...this.state,
            [e.target.name]:e.target.value
        })
        document.getElementById('rt').style.display = "none"
        
    }


    readFormValues = e => {
        e.preventDefault();
        //this.componentDidUpdate();
        if(!this.state.check){
            alert("Please Select Terms and Conditions");
            document.getElementById('rt').style.display = "none";
            return;
        }
        document.getElementById('rt').style.display = "inline";
    }

    render() {

        return (
            <div className="Main">
                <Form className="MainForm" onSubmit={this.readFormValues}>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" 
                onChange={this.readName}
                />
                </Form.Group>

                <Form.Group as={Col} controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="fullName" type="text" placeholder="Full Name"
                onChange={this.readName}   
                />
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control name="address" placeholder="1234 Main St"
                onChange={this.readName}
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control name="address2" placeholder="Apartment, studio, or floor" 
                onChange={this.readName}/>
                </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control name="city" placeholder="Toronto"
                onChange={this.readName}
                />
                </Form.Group>

                <Form.Group as={Col} controlId="province">
                <Form.Label>Province</Form.Label>
                <p>
                <RegionDropdown className="region"
                country={"Canada"}
                value={this.state.province}
                defaultOptionLabel={"Select Province"}
                onChange={(val) => {this.selectProvince(val)}}/>
                </p>
                </Form.Group>

                <Form.Group as={Col} controlId="postalCode">
                <Form.Label>Zip</Form.Label>
                <Form.Control name="postalCode" placeholder="A1A 2B2"
                onChange={this.readName}/>
                </Form.Group>
                </Row>

                <Form.Group className="chckSub" id="formGridCheckbox">
                <Form.Check name="check" type="checkbox" label="Agree Terms & Conditions" 
                 onChange={this.readName}/>
                </Form.Group>

                <p className="btnSubmit">
                <Button variant="success" type="submit">Submit</Button>
                </p>
                </Form>

                <div class="dataContainer" id="rt"> 
                <DataRender names={[this.state.email, 
                    this.state.fullName, 
                    this.state.address, 
                    this.state.city, 
                    this.state.province, 
                    this.state.postalCode]} />
                </div>
            </div>

                
        )
        
    }

}


