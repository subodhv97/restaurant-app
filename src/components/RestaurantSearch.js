import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            seachdata: null,
            nodata:false,
            lastsearch:"",
        }
    }
    delete(id)
    {
        fetch('http://localhost:3000/restaurant/'+id,{
            method: 'delete',
            headers:{
                'content-Type':'application/json'
            },
            body: JSON.stringify(this.state)

        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been deleted")
                this.search(this.state.lastsearch)
            })
        })

    }
    search(key) {
        console.warn(key);
        this.setState({lastsearch:key})
        fetch('http://localhost:3000/restaurant?q=' + key).then((result) => {
            result.json().then((resp) => {
                console.warn("resp", resp);
                if(resp.length>0)
                {
                    this.setState({ seachdata: resp ,nodata:false});
                }
                else{
                    this.setState({nodata:true, seachdata:null})
                }
               
            })
        })

    }
    render() {
        return (
            <div>
                <h1> Restaurant Search</h1>
                <br />
                <br />
                <input placeholder="Enter keywords" onChange={(event) => this.search(event.target.value)}></input>
                <br />
                <br />
                <div>
                    {
                        this.state.seachdata ?
                            <div>
                                <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.seachdata.map((item) =>
                                    <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.address}</td>
                                    <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                                    
                                        <span onClick={()=>{this.delete(item.id)}}><FontAwesomeIcon icon={faTrashAlt} /></span>
                                    </td>
                                </tr>   )
                                }
                                </tbody>
                                </Table>
                            </div>
                            :""
                    }
                    {
                        this.state.nodata?<h4>No Data Found</h4>
                        :null 
                    }
                </div>
            </div>
        );
    }
}

export default RestaurantSearch;