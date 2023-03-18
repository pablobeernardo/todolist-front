import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBCardText, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import ButtonEdit from "../components/button-edit";
import SairButton from "../components/button-sair";
import NavApp from "../../home/views/components/navbar";

interface Props{
    
}

export default class HomeProfile extends React.Component<Props>{
    render(){
        return(
            <div className="fundoImage vh-100"  style={{ backgroundColor: '' }}>
              <NavApp/>
                <MDBContainer className="container py-5 h-100">
                  <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="12" xl="4">
                      <MDBCard style={{ borderRadius: '15px' }}>
                        <MDBCardBody className="text-center">
                          <div className="mt-3 mb-4">
                            <MDBCardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6hrrsVtU9Go37TE5rxkJr9cQEuP0aE04M5gN66vjCeo2rNx8I8h3sZLThifUk8mpqac&usqp=CAU"
                              className="rounded-circle" fluid style={{ width: '100px' }} />
                          </div>
                          <MDBTypography tag="h4" className="mb-3">victor vh</MDBTypography>
                          <MDBCardText className="text-muted mb-4">
                              <ButtonEdit/>
                          </MDBCardText>
                        
                          <SairButton/>
                          <div className="d-flex justify-content-between text-center mt-5 mb-2">
                            
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}