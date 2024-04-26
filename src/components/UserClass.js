import React from "react";

class UserClass extends React.Component{
       constructor(props){
          super(props);
       } 
      render(){

        const {name , location} = this.props;
        return(
            <div className="user-card">
           <h2> {name}</h2> 
           <h3>{location}</h3>
           <h4>contact : addb@gmail.com</h4>
        </div> 
        );
      }
}

export default UserClass;