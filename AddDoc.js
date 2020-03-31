import React from 'react';
import DocumentService from './DocumentService'

class AddDocuments extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            document_title:'',
            desc:'',
            publisher:''
        }
    }

    addDoc= () => {
        DocumentService.postAPI('create-document',
        {
            document_title:this.state.document_title,
            desc:this.state.desc,
            publisher:this.state.publisher
        })
        .then(json => {
            if(json.data.stausCode === 200){
                this.props.history.push('/index')
            }
        }).catch((error) =>{
            console.log("error---------", error)
        })
    }

    handleChange= (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return(
            <div>
            <h2>
                Add Document Form
            </h2>
            <div>
                <div>
                    <form>
                        <div>
                            <label>
                                Title:
                            </label>
                            <input name="document_title" type="text"
                            className="form-control" 
                            onChange={this.handleChange} 
                            value={this.state.desc}>
                            </input>
                              <div className="form-group">
                                  <label>Publisher:</label>
                                  <input name="publisher" 
                                  onChange={this.handleChange}
                                  value={this.state.publisher}>

                                  </input>
                              </div>  
                              <button type="button"
                              onClick={this.addDoc}
                              className="btn btn-primary">
                                  Submit
                              </button>
                            
                        </div>
                    </form>
                </div>
            </div>
            </div>
            
        );
    }
}

export default AddDocuments;