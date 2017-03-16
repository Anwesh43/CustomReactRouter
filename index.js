import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CustomRouter from './CustomRouter'
import Route from './Route'
const Home = ()=>{
    var style = {border:'1px solid black'}
    return <div style={style}>Home is where you can code</div>
}
const Index = () => {
    var style = {border:'1px solid red'}
    return <div style={style}>Index page</div>
}
const Hello = ()=>{
    var style = {border:'1px solid green'}
    return <div style={style}>Hello World</div>
}
class MyComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {

        return (<CustomRouter h1="Router Demo">
          <Route path="/" component={Index}/>
          <Route path="/home" component={Home}/>
          <Route path="/hello" component={Hello}/>
          </CustomRouter>)
    }
}
ReactDOM.render(<MyComponent/>,document.getElementById('comp'))
