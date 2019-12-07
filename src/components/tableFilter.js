import React from "react"
import {connect} from "react-redux"
import {getTableData} from "../actions/tabelData"
import  "../bootstrap.css"

class TableSort extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:"",
            flip:[],
            originalData: JSON.parse(JSON.stringify(this.props.tableData)),
            tableData : this.props.tableData 
        }
    }
    componentDidMount=()=>{
        this.props.dispatch(getTableData())
    }

    handleChange=(e)=>{
        let search = e.target.value
        this.setState(prevState=>{
            const rowData = prevState.originalData.rowData.filter(person=>{
                return person.data.find(detail => detail.value.toLowerCase().includes(search.toLowerCase()))
            })
            if(rowData){
                prevState.tableData.rowData = rowData
                return {tableData: prevState.tableData, search}
            }else{
                return {tableData:[], search}
            }
        }) 
    }


    handleSort=(id)=>{
        let value
        this.setState(prevState=>{
            let findItem = prevState.flip.find(item=> item.id == id)
            if (findItem) findItem.set = !findItem.set
            value = findItem ? findItem.set : false 
            return findItem ? {flip: prevState.flip.concat([{"id": id, "set":false}])} : {flip: prevState.flip}
        })
        this.setState((prevState)=>{
            if(id !== "dateOfBirth"){
                prevState.tableData.rowData.sort(function(a,b){
                    const valueA = a.data.find(d=> d.id == id ).value.toLowerCase()
                    const valueB = b.data.find(d=>d.id == id).value.toLowerCase()
                    if (valueA < valueB){return value==false ? -1 : 1} 
                    else if (valueA > valueB){return value==false ? 1 : -1}
                    else{return 0}
                })
            }
            return {tableData: prevState.tableData}
        })
    }
    

    render(){
        return(
            <div>
                <div>
                    <label></label>
                    <input type="text" placeholder="Filter your search" value={this.state.search} onChange={this.handleChange} />
                </div>
                <div>{this.state.tableData.rowData.length > 0 &&
                    <table className="table">
                        <thead>
                            <tr>{this.state.tableData.columnHeaders.map(detail=>{
                                return <th key={detail.id}><a href="#" onClick={()=>{this.handleSort(detail.id)}}>{detail.label}</a></th>
                            })
                            }</tr>
                        </thead>
                        <tbody>
                            {this.state.tableData.rowData.map((person, index)=>{
                                return <tr key={index}>{person.data.map(detail=>{
                                    return <td key={detail.id}>{detail.value}</td>
                                })}</tr>
                            })
                            }
                        </tbody>
                    </table> 
                }</div>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
        tableData : state.tableData
    }
}

export default connect(mapStateToProps)(TableSort)