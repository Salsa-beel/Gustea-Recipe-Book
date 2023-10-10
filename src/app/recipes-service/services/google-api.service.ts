import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { AuthConfig, OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { retry, Subject } from 'rxjs';


const oAuthConfig: AuthConfig = {

  issuer: 'https://accounts.google.com', // authorization provider is the issuer which is google
  strictDiscoveryDocumentValidation:false,
  redirectUri: window.location.origin,
  clientId:'520544206375-2sn8a6tqik769qs3boscec0t7l1mc649.apps.googleusercontent.com',
  scope:'openid profile email' // at least we need to add one scope like email or profile, we added profile and email and later we need to add api gmail scope to read the users emails.

}

export interface UserInfo {
  info:{
    sub:string,
    email:string,
    name:string,
    picture:string
  }
}

@Injectable({
  providedIn: 'root'
})



export class GoogleApiService {

userProfileSubject = new Subject<UserInfo>()

constructor( private readonly oAuthService:OAuthService) {

  oAuthService.configure(oAuthConfig)

  // we must tell the service to load the discovery document.

  oAuthService.loadDiscoveryDocument().then ( ()=>{

    // after the document get loaded we call implicit flow but it doesn't initial the login process,
    // it only gets the token from the URL,
    // we used implicit not code flow so the token will be hashed.

    oAuthService.tryLoginImplicitFlow().then ( () =>{

      // google once it sees the valid token it will allow the user to go to our window.location.origin
      //and then initialize the login process and will be directed to google to login
      if(!oAuthService.hasValidAccessToken()){

        oAuthService.initLoginFlow()
      } else
      oAuthService.loadUserProfile().then( (userProfile) =>{
        // console.log(JSON.stringify(userProfile))
        this.userProfileSubject.next(userProfile as UserInfo)
      })
    })
  })

 }

 isLoggedIn():boolean {
  return this,this.oAuthService.hasValidAccessToken()
 }

 signOut(){
  this.oAuthService.logOut()
 }
}


