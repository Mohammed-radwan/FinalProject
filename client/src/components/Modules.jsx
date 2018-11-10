import React, { Component} from 'react';
import { getModules, createModule ,deleteModule,updateModule } from '../api/modules';
import EditModule from './EditModule'
import Module from './Module'

class Modules extends Component {
      state = {
      title:'',
      modules: [],
      selectedModule:null
      };
  componentDidMount() {
    getModules().then((modules) => {
      this.setState({ modules: modules });
    });
  }
  handlingChange = e => {
    this.setState({
      title: e.target.value
    });
};
  addNewModule = (e) => {
    e.preventDefault()
    createModule(this.state.title)
    .then(newModule => {
      this.setState({
        modules: this.state.modules.concat(newModule),
        title: ""
      });
    });
}

handleDelete = (id) => {
  // const i = this.state.modules.findIndex(c => c._id === id);
  //     const modules = [
  //       ...this.state.modules.slice(0, i),
  //       ...this.state.modules.slice(i + 1),
  //     ];
  deleteModule(id);
  this.setState({
    modules: this.state.modules.filter(module => module._id !== id)
  });
};

  handleSelect = (module) =>{
    this.setState({ selectedModule: module})


  }
  handeleSave = (module) =>{
    // updateModule(id,title)
    console.log(module)
    this.setState({ selectedModule: module})
    


  }
  handleCancel = () =>{
    this.setState({ selectedModule: null})


  }
  handlechange = (e) =>{
    let selectedModule = this.state.selectedModule;
    selectedModule[e.target.name]= e.target.value;
    this.setState({ selectedModule: selectedModule});


  }

  render() {
    const { modules } = this.state;


      return (
          <div>
            <h2>  Title of the active path</h2>
              <fieldset className= 'container'>
              <legend className='' >modules :</legend>
              <div className = 'container2'>
            
            <input 
                type='text'
                placeholder="Enter new module" 
                onChange={this.handlingChange}
                value = {this.state.title}
            />
            <button className="btn"
                
                onClick ={this.addNewModule} 
            >Add module </button>
  
              </div>
            
            <ul >
                {modules.map(module =>
                  <li  className = 'module'
                 onClick ={()=>  {this.handleSelect(module)}}
                >
                <div>
                 <div> {module.title} </div>
                </div>
                <button className = 'delete-button'
                onClick ={() => this.handleDelete(module._id)}
                > Delete </button>
        </li>
              )}
                
            </ul>
            
             <div className = 'editarea'> 
              <  EditModule  
                addingModule={this.state.addingModule}
                selectedModule={this.state.selectedModule}
                onChange = {this.handlechange} 
                onSave = { this.handeleSave}
                onCancel = {this.handleCancel}
                onDelete = {this.handleDelete}
              />

             </div>
             </fieldset>
          
          </div>

        
      )
    
      
    }
  
}

export default Modules;