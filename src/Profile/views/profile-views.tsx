import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBCardText } from "mdb-react-ui-kit";
import SairButton from "../components/button-sair";
import { ContainerFull, ContainerContent } from "../../shared/models/views/style";
import NavApp from "../../shared/models/views/navbar";
import ButtonEditProfile from "../components/button-edit";
import UserModel from "../../shared/models/user-model";
import profile2 from "../../assets/imagem-profile.jpg";

interface Props{
  user: UserModel;

}

export default class HomeProfile extends React.Component<Props>{
    render(){
      console.log('Teste', this.props.user.profilePictureImageUrl);
        return(
          <ContainerFull className="vh-100">
            <NavApp user={this.props.user}/> 
              <ContainerContent >
                <MDBCard style={{ borderRadius: '15px', width:450 }}>
                  <MDBCardBody className="text-center">
                  
                    <MDBCardImage alt="" src={this.props.user !== undefined ? this.props.user.profilePictureImageUrl : profile2}
                      className="rounded-circle" fluid style={{ width: '170px' }} />
    
                    <MDBTypography tag="h4" className="mb-1">{this.props.user.firstname} {this.props.user.lastname}</MDBTypography> 
                    <MDBTypography tag="h6" className="mb-1">{this.props.user.email}</MDBTypography>
                    <MDBTypography tag="h6" className="mb-3">{this.props.user.birthday}</MDBTypography>
                    <MDBCardText className="text-muted mb-3">
                        <ButtonEditProfile/>
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