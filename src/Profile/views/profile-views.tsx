import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBCardText } from "mdb-react-ui-kit";
import ButtonEdit from "../components/button-edit";
import SairButton from "../components/button-sair";
import { ContainerFull, ContainerContent } from "../../shared/models/views/style";
import NavApp from "../../shared/models/views/navbar";

interface Props{
    
}

export default class HomeProfile extends React.Component<Props>{
    render(){
        return(
          <ContainerFull className="vh-100">
            <NavApp/> 
              <ContainerContent >
                <MDBCard style={{ borderRadius: '15px', width:450 }}>
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <MDBCardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6hrrsVtU9Go37TE5rxkJr9cQEuP0aE04M5gN66vjCeo2rNx8I8h3sZLThifUk8mpqac&usqp=CAU"
                        className="rounded-circle" fluid style={{ width: '170px' }} />
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
            </ContainerContent>
          </ContainerFull>
        )
    }
}