import React,{Component} from 'react'
export default class Route extends Component {
    render() {
        var pathName = this.props.path.replace("/","")
        return <li><a href={`#/${pathName}`}>{pathName.trim() == ""?"index":pathName}</a></li>
    }
}
