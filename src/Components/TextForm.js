import React, { Fragment, useEffect, useState } from 'react'
import { Link, } from 'react-router-dom'
import New from '../Backend/New'


export default function TextForm(props) {
    const [name, setName] = useState([]);
    //
    useEffect(() => {
        New.getNew().then((response) => {
            setName(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const GetNew = () => {
        New.getNew().then((response) => {
            setName(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteBlog = (id) => {
        New.deleteBlog(id).then((response) => {
            GetNew();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <Fragment>
            <div className={`container text-center text-${props.mode === 'dark' ? 'light' : 'dark'} `}>
                <h1 >{props.heading}</h1>
                <table className={`table text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
                    <thead >
                        <tr>
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>E-mail</th>
                            <th>Tech-Blog</th>
                            <th>Add</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            name.map((items) => {
                                return (
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.firstName}</td>
                                        <td>{items.lastName}</td>
                                        <td>{items.email}</td>
                                        <td>{items.blog}</td>

                                        <td>
                                            <Link className='FillApplication' to="/fill">
                                                <button type="button" className='btn btn-success'>Add</button>
                                            </Link>
                                        </td>

                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteBlog(items.id)} >Delete</button></td>
                                        <td><Link className="btn btn-info" to={`/fill/${items.id}`}>Edit</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </Fragment>
    )
}
