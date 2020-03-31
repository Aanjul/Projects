import React from 'react';
import DocumentService from './Document Service';

class AddDocument extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            document_title:'',
            desc:'',
            publisher:''
        }
    }
    addDoc=()=>{
        DocumentService.postApi('create-document',
        {document_title:this.state.document_title,desc:this.state.desc,publisher:this.state.publisher})
        .then(json => {
            if(json.data.statusCode===200){
                this.props.history.push('/index')
            }
            else{
                alert('something went wrong!!');
                this.props.history.push('/index')
            }
        }).catch((error) => {
            console.log("error---------",error)
        })
    }
    handleChange= (e) => {
        this.setState({[e.target.name]:e.target.value});

    }

    render () {
        <div>
            <h2 className="text-center"> Add Document Form </h2>
            <div  className="row justify-content-md-center">
                <div className="col-md-6 col-md-offset-3">
                    <form>
                        <div className="form-group">
                        <lable> Title:</lable>
                        <input name="document_title" type="text" className="form-control" onChange={this.handleChange} value={this.state.document_title}></input>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    }
}