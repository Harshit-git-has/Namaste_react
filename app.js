
/**
// *
//  * 
//  * <div id= "parent"/>
//  *       <div id = "child">
//  *          <h1> I'm  h1 tag</h1>
//  *         <h2> I'm h2 tag</h2>
//  * </div>
//  *       <div id = "child 2">
//  *          <h1> I'm  h1 tag</h1>
//  *         <h2> I'm h2 tag</h2>
//  * </div>
//  * </div>  
*/


const parent=React.createElement( "div",{ id:"parent"},[
    React.createElement("div",{id:"child 1"},[
         React.createElement("h1",{}, "I'm an h1 tag"),
         React.createElement("h2",{}, "I'm an h2 tag")
     ]),
    React.createElement("div",{id:"child 2"},[
        React.createElement("h1",{}, "I'm an h1 tag"),
        React.createElement("h2",{}, "I'm an h2 tag")
    ])
    ]);


    //* jsx 


// const heading = React.createElement(
//     "h1",
//      {id:"heading", xyz:"abc"}, 
//      "Hello world from react !");

       console.log(parent); // object
        
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
