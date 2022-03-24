import React from "react";
import { useEffect, useState } from "react";
import "../Css/Notes.css";
import video from "../Images/video.png";
import Subject from "../Images/Subject.png";
import { MdAddCircle } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import swal from 'sweetalert';
import ReactPaginate from "react-paginate";
const getDatafromLS = () => {
  const adata = localStorage.getItem('Adata');
  if (adata) {
      return JSON.parse(adata);
  }
  else {
      return []
  }
}
const Notes = () => {
    const [Adata, setAdata] = useState(getDatafromLS());
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("");
    const [Topics, setTopics] = useState("")
    const [showedit, setShowedit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const [view, setView] = useState(false)
    const colors = ['Select_color', 'green', 'Yellow', 'Red', 'blue', 'orange', 'pink', 'yellow', "black", "white", "purple"]
    const Topic = ['Select_topics', 'Topic:0-10', 'Topic:10-20', 'Topic:20-30', 'Topic:30-40', 'Topic:40-50', 'Topic:50-60', 'Topic:60-70', "Topic:70-80", "Topic:80-90", "Topic:90-100"]
    //pegination
    const [users, setUsers] = useState(Adata.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    
    const displayUsers = (users.length>0) ? users.slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-4 Subject_show  " key={user.id}
              style={{ borderLeft: "10px solid", borderColor: user.color, backgroundImage: `url(${Subject})`, backgroundPosition: "bottom right", backgroundColor: "#F7FCFF" }}>
              <div className="row mt-3 text-left" >
                  <div className="col-12"><b>{user.subject}</b></div>
                  <div className="col-12 mt-3"><p>{user.Topics} </p></div>
                  <div className="col-8 mt-3"><GrEdit type="button" className="Icons"
                      onClick={() => handelEdit(user.id) } />
                      <BsTrash type="button" className="Icons" onClick={() => deleteSubject(user.id)} />
                      <GrView type="button" className="Icons" onClick={() => handelView(user.id)} />
                  </div>
              </div>
          </div>
            )
        })
        : (<div className="text-center p-5"><img src={video} style={{fontSize:"1000px"}}></img><h6> Notes Not Addedd Till Now 
            Plese Add Notes</h6></div>)
    const handelSubmit = (e) => {
        e.preventDefault();
        if (subject === "") {
            swal("Empty data!", "plese fill the data !", "error");
        }
                else if (description === "") {
                  swal("Empty data!", "plese fill the data !", "error");
              }
              else if (color === "") {
                swal("Empty data!", "plese fill the data !", "error");
            }
            else if (Topics === "") {
              swal("Empty data!", "plese fill the data !", "error");
          }
        else if (subject && !showedit) {
            setAdata(
                users.map((item) => {
                    if (item.id === isEditItem) {
                        return { ...item, subject: subject, description: description, color: color, Topics: Topics }
                    }
                    return item;
                }))
                setUsers(
                    users.map((item) => {
                        if (item.id === isEditItem) {
                            return { ...item, subject: subject, description: description, color: color, Topics: Topics }
                        }
                        return item;
                    }))
            setShowedit(true);
            setIsEditItem(" ");
            setSubject("")
            setDescription("")
            setColor("")
            setTopics("")
            swal("Good job!", "Subject Is Updated Successfuly!", "success");
        }

        else {
            const AllInputData = { id: new Date().getTime().toString(), subject: subject, color: color, Topics: Topics, description: description }
            console.log("data", AllInputData)
            setUsers([...Adata, AllInputData])
            setAdata([...Adata, AllInputData])
            setSubject("");
            setDescription("");
            setTopics("")
            setColor("")
            setShowedit(true)
            swal("Good job!", "Subject Added Successfuly!", "success");
        }
    }
    const handelEdit = (id) => {
        let newEditItem = Adata.find((elem) => {
            return elem.id === id
        })
        console.log(newEditItem);
        setShowedit(false);
        setSubject(newEditItem.subject);
        setDescription(newEditItem.description);
        setTopics(newEditItem.Topics);
        setColor(newEditItem.color);
        setIsEditItem(id);
        setView(false)
    }
    // view subject 
    const handelView = (id) => {
        let newEditItem = Adata.find((elem) => {
            return elem.id === id
        })
        console.log(newEditItem);
        setSubject(newEditItem.subject);
        setDescription(newEditItem.description);
        setTopics(newEditItem.Topics);
        setColor(newEditItem.color);
        setView(!view);
    }
    //cancel button 
    const handCancele = () => {
        swal("Good job!", "Added data cleared successfully!", "error");
        setSubject("");
        setDescription("");
        setColor("");
        setTopics("");
        setView(false)
    }
    //delet subject 
    const deleteSubject = (index) => {
        swal("Good job!", "Subject Deleted successfully!", "success");
        const filteredBook = Adata.filter((element) => {
            return (index !== element.id)
        })
        setAdata(filteredBook);
        setUsers(filteredBook);
    }
    useEffect(() => {
        localStorage.setItem('Adata', JSON.stringify(Adata))
        console.log(Adata)
    }, [Adata]);
    return (
        <>
        <div className="container-fluid NotesContainer">
                    <div className="row justify-content-center ">
                        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6 card_main">
                            <h2 className="mt-2">Notes</h2>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 card_main  text-right">
                            <img style={{height:"80%"}} src={video} alt="img"></img>
                        </div>
                    </div>

                    <div className="row mr-3">
                        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                            <div className="row justify-content-center m-0 p-0" >
                                {displayUsers}
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 card_Add">
                            <div className="row justify-content-center">
                                <div className="col-xl-12">
                                    {
                                        showedit === true ? (<MdAddCircle style={{ fontSize: "50px" }} />) : (<FiEdit style={{ fontSize: "50px" }} />)
                                    }
                                </div>
                                <div className="col-xl-12">{showedit === true ? <h3>Add_Notes</h3> : <h3>Edit_Notes</h3>}</div>
                            </div>
                            <form onSubmit={handelSubmit} >
                                <div className="row justify-content-center p-3">
                                    <div className="col-xl-12">
                                        <div className="form" >
                                            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                                            <label className="label-name">
                                                <span className="content-name"> Enter Notes Name</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 pt-5 ">
                                        <select className="dropdowne" value={color} onChange={(e) => setColor(e.target.value)} required>
                                            {colors.map((item, index) => {
                                                return (
                                                    <option className="p-3 " key={index}>{item}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-12 pt-5">
                                        <select className="dropdowne" value={Topics} onChange={(e) => setTopics(e.target.value)} required>
                                            {Topic.map((item, index) => {
                                                return (
                                                    <option className="p-3" key={index} >{item}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-xl-12 mt-5"><div className="form">
                                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                                        <label className="label-name">
                                            <span className="content-name">Description</span>
                                        </label>
                                    </div>

                                    </div>
                                   <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 pt-4">
                                      <button type="reset" className="btn btn-danger" onClick={handCancele}>cancel</button>
                                    </div>              
                                    { (view === false) ? showedit === true ? 
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 pt-4"><button type="submit" className="btn btn-info "> Add </button>
                                    </div> :                                           
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 pt-4"><button type="submit" className="btn btn-info "> Update </button>
                                    </div>:""                                      
                                    }
                                   </div>
                                  </div>

                            </form>

                        </div>
            </div> 
            </div> 
    </>)

  };
  
  export default Notes;