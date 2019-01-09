import React,{Component}  from 'react';


class Addform extends Component{

state={
content:""
 
}
handlechange=(e)=>{
this.setState({
    content:e.target.value
})
}
onsubmited=(e)=>{
e.preventDefault();
this.props.addtodo(this.state);

this.setState({
    content:""
})
}

render(){
    return(
        <div>
            <form  onSubmit={this.onsubmited}>

                <label htmlFor="">Add new todo</label>
                <input type="text" onChange={this.handlechange} value={this.state.content}/>
            </form>
        </div>

    )
}

}

export default Addform