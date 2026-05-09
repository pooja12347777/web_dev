function Header({name}){

    return (
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}    
       
       
       
       
       function Main({user}){

    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3>{user.age>18? "Ypur are eligible for vote": "Your are not eligible for vote"}</h3>
        <p>Your city is {user.city}</p>
        </>
        
    )
}

function Footer(){

    return (
        <h3>Thansk for visiting our website</h3>
    )
}

// function Card(){

// }


function App(){

    return (
        <>
       <Header name="pooja"></Header>
       <Main user={{name:"pooja",age:21,city:"noida"}}></Main>
       <Footer />
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

// App()
// <App/>