import React from 'react';
import { useOktaAuth } from '@okta/okta-react';


 const SignInForm = () => {
  const { oktaAuth } = useOktaAuth();
 
 const handleSubmit = async ( e) => {

    
    // var form = document.createElement("form");
    // form.setAttribute("method", "get");
    // form.setAttribute("action", "http://localhost:8080/unifiedhostingapi/sso-login/1");
    //form.submit();
    //  oktaAuth.signInWithRedirect({
      
    //  }).then(data=>{
    //    console.log(data);
    //  })
    //  .catch(err => console.log('Found an error', err));

    // oktaAuth.signInWithRedirect({
    //   idp: "0oa14djekuzRqQJeJ0h8"
    // });
  };




 

  return (  
    // <form type="get" action='http://localhost:8080/unifiedhostingapi/sso-login/1'>
    //    <button  type="submit">
    //   Social Login
    //   </button>
    // </form>  
     <button onClick={handleSubmit}>
       On refresh
     </button>
   );
};
export default SignInForm;
