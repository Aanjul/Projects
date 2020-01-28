import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentsDetail';
import  ApprovalCard from './ApprovalCard';
const App = () =>{
    return (
        <div className="ui container comments">
    <ApprovalCard>
        <h2>See this  warning</h2>
    <div>
        This is my page
    </div>
        
    </ApprovalCard>

        <ApprovalCard>
                 <CommentDetail 
                    author="Sam"  
                    timeAgo="Toady at 3:00PM" 
                    comment="You are enough"
                    avatar={faker.image.avatar()}
           />
           </ApprovalCard>
            
          <ApprovalCard>
          <CommentDetail 
           author="Sara" 
           timeAgo="Today at 5:45  AM"  
           comment="This is great inside"
           avatar={faker.image.avatar()}
           />
            </ApprovalCard>
          
           <ApprovalCard>
           <CommentDetail 
           author="Ronald" 
           timeAgo="Today at 7:00 PM" 
           comment="Great programming"
           avatar={faker.image.avatar()}
           />
           </ApprovalCard>

           <ApprovalCard>
           <CommentDetail 
           author="Jane" 
           timeAgo="Yesterday at 5:45  AM" 
           comment="This is a bit  speculative"
            avatar={faker.image.avatar()}
           />
           </ApprovalCard>

           const = ()=> {

               
           }
        
           
            {/* <div className="comment">
               <a href="/" className="avatar">
                   <img alt="avatar" src={faker.image.avatar()}/>
               </a>
               <div className="content">
                   <a href='/' className="author">
                       Sam
                   </a>
                   <div className="metadata">
                       <span className="date">
                           Today at 11:00 PM
                       </span>
                   </div>
                   <div  className="text">Nice Blog Post!</div>
               </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href='/' className="author">
                        Sam
                   </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 11:00 PM
                       </span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href='/' className="author">
                        Sam
                   </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 11:00 PM
                       </span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div> */}
        </div>

    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))