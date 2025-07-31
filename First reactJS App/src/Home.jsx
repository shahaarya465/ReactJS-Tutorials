import './hello.css';
import mc from './5292189.jpg'

function Home() {
    var a = 10
    var b = 20
    var mycolor = { color: 'white', backgroundColor: 'green' }
      return (<>
      <h1>Home</h1>
      A value is {a} <br/>
      B value is {b}
      <p style={mycolor}>i am p tag</p>
      <img src={mc} width='300'/>
    </>)
}

export default Home;