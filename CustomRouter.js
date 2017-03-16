import React,{Component} from 'react'
class CustomRouter extends Component {
    constructor(props){
        super(props)
        this.state = {activeComponent:()=>{return <div></div>}}
    }
    componentDidMount() {
        var pathComponentMap = {}
        this.props.children.forEach((child)=>{
            if(child.type.name == "Route") {
                pathComponentMap[child.props.path] = child.props.component
            }
        })
        window.onhashchange = () => {
            var hashPath = window.location.hash
            hashPath = hashPath.replace("#","")
            this.setState({activeComponent:pathComponentMap[hashPath]})
            console.log(this.state.activeComponent)
        }
        console.log(`path map is ${pathComponentMap}`)
        console.log(pathComponentMap)
    }
    render() {
        return <div className={this.props.className}>
            <h1>
                {this.props.h1}
            </h1>
            <ul>
                {this.props.children}
            </ul>
            {<this.state.activeComponent/>}
        </div>
    }
}
export default CustomRouter
