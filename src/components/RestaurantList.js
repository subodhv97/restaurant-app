import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
       this.getdata()
    }
    getdata(){
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {

                this.setState({ list: result })
            })
        })
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
                this.getdata()
            })
        })

    }
    render() {
        // console.warn(this.state)
        return (
            <div>
                <h1>Restaurants List</h1>
                {
                    this.state.list ?
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
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                                                
                                                    <span onClick={()=>{this.delete(item.id)}}><FontAwesomeIcon icon={faTrashAlt} /></span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>

                        </div>
                        :
                        <p>Please Wait ....</p>
                }
            </div>
        );
    }
}

export default RestaurantList;