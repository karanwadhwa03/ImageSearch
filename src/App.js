import React,{Component} from 'react'
import './App.css';
import axios from 'axios'


class App extends Component{

  state={
    images:[],
    inputvalue:''
  }

  showhandler=(event)=>{
    event.preventDefault();
    // console.log('-----------')
    // console.log(this.state.inputvalue);
    const value=this.state.inputvalue;
    axios.get('https://api.unsplash.com/search/photos?page=1&color=black&per_page=50&query='+value+'&client_id=Z814KRaR7WvoAfOz13dX3kbJ5A2-q33jbQZ6B0g_bQ4')
    .then(Response=>{
      console.log(Response.data.results)
      this.setState({images:Response.data.results}
        
        )
      });

  }



  render(){

     let images=null;
     if(this.state.images.length>0){
       images=[...this.state.images].map(Image=>{
       return( 
            <div className="box" key={Image.id} >
            <img src={Image.urls.raw}   style={{padding:"5px"}}></img>
            </div>
        
       )


       })
      
     }


    return (
      <div>
        
        <form>
        <h1>IMAGE SEARCH</h1>
          <input type="text" className="form" value={this.state.inputvalue} onChange={(event)=>{this.setState({inputvalue:event.target.value})}}></input>
          <button className="btn" onClick={this.showhandler}> SHOW</button>
        </form>
        

        <div className="container">

        
        {
          images
        }
        
        </div>
        
      </div>

    )


  }


}

export default App;
