import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import New from '../Backend/New'


export default function FillAplication(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [blog, setBlog] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdatBlog = (e) => {
        e.preventDefault();
        const guest = { firstName, lastName, email, blog }

        if (id) {
            New.updateBlog(id, guest).then((resposne) => {
                navigate('/')
            }).catch(error => {
                console.log(error);
            })
        }
        else {
            New.creatNewBlog(guest).then((response) => {
                console.log(response.data)
                navigate('/')

            }).catch(error => {
                console.log(error)
            })

        }
    }

    useEffect(() => {
        New.getNewById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
            setBlog(response.data.blog)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div >
            <form >

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} >firstName</label>
                    <input type="text" className="form-control" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        id="exampleInputPassword1" />
                </div>



                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}>lastName</label>
                    <input type="text" className="form-control" value={lastName}
                        onChange={(e) => setLastName(e.target.value)} id="exampleInputPassword1" />
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className={`form-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Email address</label>
                    <input type="email" className="form-control" value={email}
                        onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>



                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className={`form-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Tech-blog</label>
                    <input type="text" className="form-control" value={blog}
                        onChange={(e) => setBlog(e.target.value)} id="exampleInputPassword1" />
                </div>

                {/* <Link className="container text-center" onClick={(e) => save(e)} to="/">
                    
                </Link> */}

                <div className="container text-center" onClick={(e) => saveOrUpdatBlog(e)}>
                    <button type="submit" className="btn  btn-primary mx-5">Submit</button>
                </div>

            </form>
        </div>
    )
}
