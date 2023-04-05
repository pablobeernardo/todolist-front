import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBCardText } from "mdb-react-ui-kit";
import ButtonEdit from "../components/button-edit";
import SairButton from "../components/button-sair";
import { ContainerFull, ContainerContent } from "../../shared/models/views/style";
import NavApp from "../../shared/models/views/navbar";
import ButtonEditProfile from "../components/button-edit";
import UserModel from "../../shared/models/user-model";

interface Props{
  user?: UserModel | undefined;

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
                      <MDBCardImage alt="" src={this.props.user !== undefined ? this.props.user.profilePictureImageUrl : "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" }
                        className="rounded-circle" fluid style={{ width: '170px' }} />
                    </div>
                    <MDBTypography tag="h4" className="mb-3">victor vh</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
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