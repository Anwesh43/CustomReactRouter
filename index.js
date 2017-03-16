import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CustomRouter from './CustomRouter'
import Route from './Route'
const Home = ()=>{
    return <div>Home is where you can code</div>
}
const Index = () => {
    return <div>Index page</div>
}
const Hello = ()=>{
    return <div>Hello World</div>
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
