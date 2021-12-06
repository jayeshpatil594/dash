import { Avatar, DangerButton, FormContainer, FormItem, Input, SaveButton } from "./Settings.styles";

const Settings = () => {
  return (
    <>
      <div className="row" style={{ maxHeight: '80vh', overflow: 'auto', paddingLeft: '2rem'}}>
        <FormContainer className="col-md-6" style={{ height: '80%'}}>
        <h4>Profile</h4>
          <div className="row">
            <div className="col-md-4"><Avatar src="https://reqres.in/img/faces/5-image.jpg" alt="Avatar" className="avatar" /></div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="firstname">
                    Firstname
                    <div>
                      <Input value="Charles" id="firstname" name="firstname" />
                    </div>
                  </label>
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname">
                    Lastname
                    <div>
                      <Input value="Morris" id="lastname" name="lastname" />
                    </div>
                  </label>
                </div>
              </div>

              <FormItem>
                <label htmlFor="dob">
                  Date of Birth
                </label>
                <div>
                  <Input id="dob" name="dob" type="date" />
                </div>
              </FormItem>
              <FormItem>
                <label htmlFor="phone">
                  Phone number
                </label>
                  <div>
                    <Input value="9348374348" id="phone" name="phone" />
                  </div>
              </FormItem>
              <FormItem>
                <label htmlFor="address">
                  Address
                </label>
                  <div>
                    <Input value="Boston, Massachusetts" id="address" name="address" />
                  </div>
              </FormItem>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"><SaveButton>Save</SaveButton></div>
              </div>
            </div>
          </div>
        </FormContainer>
        <div className="col-md-5"> 
          <FormContainer>
            <h4>Account</h4>
            <FormItem>
              <label htmlFor="email">
                Email address
              </label>
              <div>
                <Input value="charles.morris@reqres.in" id="email" name="email" type="email" />
              </div>
            </FormItem>
            <FormItem>
              <label htmlFor="current-password">
                Current Password
              </label>
                <div>
                  <Input value="current-password" id="current-password" name="current-password" type="password" />
                </div>
            </FormItem>
            <FormItem>
              <label htmlFor="new-password">
                New Password
              </label>
                <div>
                  <Input id="new-password" name="new-password" type="password" />
                </div>
            </FormItem>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6"><SaveButton>Save</SaveButton></div>
            </div>
          </FormContainer>
          <FormContainer style={{ marginTop: '1rem'}}>
            <h4 style={{ marginBottom: '1rem' }}>Security</h4>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked />
              <label class="form-check-label" htmlFor="mySwitch">2-Step Verification</label>
            </div>
          </FormContainer>
          <FormContainer style={{ marginTop: '1rem'}}>
            <h4 style={{ marginBottom: '1rem' }}>Danger zone</h4>
            <DangerButton>
            Delete My Account
            </DangerButton>
          </FormContainer>
        </div>
      </div>
    </>
  );
};



export default Settings;
