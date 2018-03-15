import React from 'React';
import ReactDOM from 'react-dom';
require('../css/style.css');






 class App extends React.Component{
         constructor(props){
             super(props);
             this.state={
                 array: JSON.parse(localStorage.getItem('stickers')).length > 0 ? JSON.parse(localStorage.getItem('stickers')) : [],
                 angle:0,
                 title: "",
                 content: ""
             }
         }

         addNote=()=>{
             //let angle =0;
             const tempStick = {
                 titleSticker: this.state.title,
                 contentSticker: this.state.content
             }
             const tempArray = this.state.array.slice(0);
             tempArray.push(tempStick)

             this.setState({
                 array: tempArray,
                 title: "",
                 content: ""
             }, () => {
               // console.log(this.state.array)
                 localStorage.setItem("stickers", JSON.stringify(this.state.array));
             });

         };

         clearNote=()=>{
             this.setState({
                 array:[]
             }, () => {
                 localStorage.setItem("stickers", JSON.stringify([]));
             })
            // console.log(this.state.array)
         };

        handleChangeTitle = (event) => {
            if(event.target.value.length < 10) {
                this.setState({
                    title: event.target.value
                })
            }

        }

         handleChangeContent = (event) => {
             if(event.target.value.length < 10) {
                 this.setState({
                     content: event.target.value
                 })
             }

         }


     render(){



            var user = JSON.parse(localStorage.getItem('stickers'));

         console.log( user)


             let arraySticker = this.state.array.map((el,i)=>{
                 return <div key={i} className="sticker">
                     <div className="bar">{el.titleSticker}</div>
                     <div className="content">{el.contentSticker}</div>
                 </div>
             });


             return <div>
             <header>Sticky Notes</header>
                     <div className="button">

                        <button onClick={this.addNote} className="btn">create note</button>
                        <button onClick={this.clearNote}className="btn">all clear</button>
                 </div>

                        <div>

                            <input
                                id="title"
                                type="text"
                                value={this.state.title}
                                onChange={this.handleChangeTitle}
                                />

                            <input
                                id="content"
                                type="text"
                                value={this.state.content}
                                onChange={this.handleChangeContent}
                            />
                        </div>
                    <div className="sticker-container">
                        {arraySticker}
                    </div>
             </div>



         }
     }


document.addEventListener('DOMContentLoaded', function(){


    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});