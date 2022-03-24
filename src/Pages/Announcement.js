import React from 'react'
import "../Css/Announcement.css"
import { useState, useEffect } from 'react';
import { GrAnnounce } from "react-icons/gr";
import { MdAddCircle } from "react-icons/md";
import { ImFilePdf } from 'react-icons/im';
import { AiOutlineDownload } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import swal from 'sweetalert';
import video from "../Images/video.png";

const getDatafromLS = () => {
    const Announce = localStorage.getItem('Announce');
    if (Announce) {
        return JSON.parse(Announce);
    }
    else {
        return []
    }
}
function Announcement() {
    const [Announce, setAnnounce] = useState(getDatafromLS());
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [Expire, setExpire] = useState('');
    const [getTitle, setGetTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [Files, setFiles] = useState('')
    const handleAddAnnouncement = (e) => {
            e.preventDefault();
            if (Description===""){
                swal("Empty data!", "Description is empty !", "error");
            }
            else if (Title===""){
                swal("Empty data!", "Title is reqired !", "error");
            }
            else if (file===""){
                swal("Empty data!", "plese select file !", "error");
            }
            else if (Expire===""){
                swal("Empty data!", "plese select expiry date !", "error");
            }
            
            else {
            let Announcement = {
                Title,
                Description,
                file,
                Expire
            }
            setAnnounce([ ...Announce,Announcement,]);
            setTitle(' ');
            setDescription('');
            setFile('');
            setExpire('');
            setViewA('');
            swal("Good job!", "Announcement  Is created Successfuly!", "success");
        }
        
        // document.getElementById('one').value = ''

    }
    useEffect(() => {
        localStorage.setItem('Announce', JSON.stringify(Announce))
        console.log(Announce)
    }, [Announce]);
    
    //Show State of View And Creat Announcement 
    const [viewAddUi, setViewAddUi] = useState(false)
    const [ViewA, setViewA] = useState(false);
    const [expireDateArray, setExpireDateArray] = useState(['Select', 'After 1week', 'After  2week', 'After  3week', 'After  4week'])
    return (
        <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-md-12 col-lg-12 col-sm-12 FORMBOX1 text-center">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 Header1 "><GrAnnounce className="align-self-center" /> <b>Announcement</b></div>
                            <div className="mt-3">
                                <div className="Filter">Sort by <select>
                                    <option>Newwest</option>
                                    <option>Oldest</option>
                                </select>
                                </div>
                            </div>
                            <div className="AnnouncementView" >
                                {console.log("datasssasasas", ViewA)}
                                {Announce && Announce.length > 0 ? Announce.map((item, index) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                setGetTitle(item.Title);
                                                setDesc(item.Description);
                                                setFiles(item.file);
                                                setViewAddUi(false)
                                                
                                            }
                                            }
                                            className="ViewAssignment row p-3" key={index}>
                                            <div className="col-6 p-1 b" Title={item.Title}> {item.Title}</div>
                                            <div className="col-6 p-1">New College</div>
                                            <div className="col-6 p-3 b" Title={item.Description}> {item.Description}</div>
                                            <div className="col-6 p-3">{item.Expire}</div>
                                        </div>
                                    )
                                }) :<div><img src={video}></img><h6>No Announcement found</h6></div>}
                            </div>

                        </div>
                        <div className="col-xl-8">
                            <div className="col-xl-12  Header2"><b>Make An Announcement <MdAddCircle className="ADDNEW" cursor="pointer" onClick={() => setViewAddUi(!viewAddUi)} /></b></div>
                            {viewAddUi == false ?
                                <div className="card"  style={{height:"60%",width:"100%",marginTop:"4%"}}>
                                    <div className="card-header HEADER">
                                        <h3>{getTitle.length > 0 ? getTitle : 'Title'}</h3>
                                    </div>
                                    <div className="card-body CardBody" >
                                        <p className="card-text text-center">{desc}</p>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <div className="row">
                                            <div className="col-2"><ImFilePdf fontSize="35" /></div>
                                            <div className="col-6"><h3>File Attached</h3></div>
                                            <div className="col-2"><BsFillEyeFill fontSize="35" cursor="pointer"data-toggle="modal" data-target="#exampleModalCenter"  /></div>
                                            <div className="col-2"><AiOutlineDownload fontSize="35" cursor="pointer" /></div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="card" style={{height:"60%",width:"100%",marginTop:"6%"}}>
                                    <form autoComplete="off" onSubmit={handleAddAnnouncement}  >
                                        <div className="form-group col-xl-6">
                                            <input type="text" className="form-control " value={Title} placeholder="Enter Announcement Title here"  onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                        <div className="form-group " >
                                            <textarea className="form-control textArea" value={Description} placeholder="Enter Description here"  onChange={(e) => setDescription(e.target.value)} />
                                        </div>
                                        <div className="form-group ">
                                            <input type="file" accept='.jpg, .png, .jpeg' className="form-control" 
                                                onChange={(e) => {
                                                    // console.log('e',e)
                                                    // console.log('eval',e.target.files[0])
                                                    // console.log('url == ',URL.createObjectURL(e.target.files[0]))
                                                    setFile(URL.createObjectURL(e.target.files[0]))
                                                    // setFile(e.target.files[0])
                                                }}
                                            />
                                        </div>
                                        <div className="row m-2">
                                            <div className="col-xl-8 col-md-3 col-lg-8 col-sm-4">Set Expire Date
                                                <select className="m-1" value={Expire} onChange={(e) => setExpire(e.target.value)} >
                                                    {expireDateArray.map((item, index) => {
                                                        return (
                                                            <option>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 "><button className="btn btn-success " type="submit">Announce</button></div>
                                        </div>
                                    </form>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            <div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Image View</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            
                           {(Files)?<img style={{width:400,height:500}} src={Files}/>:"No image found"} 
                            {console.log("images inside the file",Files)}
                        </div>
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default Announcement;