import React from 'react'
import './Main.css'
import { FaAngleDown, FaCommentAlt, FaFacebookMessenger, FaFontAwesomeFlag, FaGrin, FaMedrt, FaRegShareSquare, FaRegThumbsUp, FaSearch, FaUserFriends } from 'react-icons/fa'
import { MdMoreHoriz, MdVideoCall } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

const Main = () => {
  return (
    <div className="main">
        <div className="Rside">
            <div className="profile">
                <img src='https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600' alt="db" style={{padding:"1rem"}} />
                Parvathi
            </div>
            <div className="pro">
                <FaUserFriends color='blue' fontSize="2rem" />
                <div>Friends</div>
            </div>
            <div className="pro">
                <FaFontAwesomeFlag color='green' fontSize="2rem" />
                <div>Pages</div>
            </div>
            <div className="pro">
                <FaMedrt color='blue' fontSize="2rem" />
                <div>COVID-19 Information Center</div>
            </div>
            <div className="pro">
                <FaFacebookMessenger color='green' fontSize="2rem" />
                <div>Messenger Kids</div>
            </div>
            <div className="pro">
                <FaAngleDown color='green' fontSize="2rem" />
                <div>See More</div>
            </div>
            <br />
            <div className="Profiles">
                <img src="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" style={{height:"35px",padding:"1rem"}} />
                <h2>React Developer</h2>
            </div>
            <div className="Profiles">
                <img src="https://images.pexels.com/photos/7988081/pexels-photo-7988081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" style={{height:"35px",padding:"1rem"}} />
                <h2>Python </h2>
            </div>
            <div className="Profiles">
                <img src="https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" style={{height:"35px",padding:"1rem"}} />
                <h2>Java</h2>
            </div>
            <div className="Profiles">
                <img src="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" style={{height:"35px",padding:"1rem"}} />
                <h2>Backend</h2>
            </div>
            <div className="pross">
                <FaAngleDown color='blue' fontSize="2rem"/>
                <div>See More</div>
            </div>
        </div>
        <div className="Main">
            <div className="addStory">
                <div className="Story">
                    <img src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" style={{height:"60px",width:"50px",borderRadius:"60%",padding:"1rem"}}/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    Parvathi
                </div>
                <div className="Story">
                    <img src="https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" style={{height:"60px",width:"50px",borderRadius:"60%",padding:"1rem"}}/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    Flowers
                </div>
                <div className="Story">
                    <img src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" style={{height:"60px",width:"50px",borderRadius:"60%",padding:"1rem"}}/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                   Shadow
                </div>
                <div className="Story">
                    <img src="https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" style={{height:"60px",width:"50px",borderRadius:"60%",padding:"1rem"}}/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    Photo
                </div>
            </div>
            <div className="message">
                <div className="text">
                    <div className="post">
                        <img src="https://th.bing.com/th/id/OIP.lMrRSEPRiGCfOlywearhLwHaEo?w=370&h=191&c=7&r=0&o=5&pid=1.7" alt="pic" />
                        <input type="mind" placeholder="What's on your mind, parvathi?" />
                    </div>
                    <div className="call">
                        <div className="ico">
                            <div className="icone">
                                <MdVideoCall fontSize="3rem" color='red'/>
                                <div>LiveVideo</div>
                            </div>
                            <div className="icone">
                                <AiFillFileImage fontSize="3rem" color='green'/>
                                <div>Photo/Video</div>
                            </div>
                            <div className="icone">
                                <FaGrin fontSize="3rem" color='orange'/>
                                <div>Felling/activity</div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="posted">
                <div className="poster">
                    <div className="facebook">
                        <img src="https://th.bing.com/th?q=Unique+Flowers&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247&thvar=defctrl" alt="img" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>Siva
                        <br />
                        <div className="update">
                        </div>
                    </div>
                    <div className="edit">
                        <MdMoreHoriz fontSize="1.5rem"/>
                    </div>
                </div>
                <br />
                <div className="facebookimg">
                    <img src="https://th.bing.com/th?q=Unique+Flowers&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247&thvar=defctrl" alt="db"  style={{height:"40%",width:"100%"}}/>
                </div>
                <div className="comment">
                    <div className="like">
                        <FaRegThumbsUp color='grey'/>Like
                    </div>
                    <div className="like">
                        <FaCommentAlt color='grey'/>Comment
                    </div>
                    <div className="like">
                        <FaRegShareSquare color='grey'/>Share
                    </div>
                </div>
              </div>
              <div className="posted">
                <div className="poster">
                    <div className="facebook">
                        <img src="https://th.bing.com/th/id/OIP.E3UNwm389l_qdOdJ6zbhCAHaE8?w=281&h=187&c=7&r=0&o=5&pid=1.7" alt="img" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>Siva
                        <div className="update">
                        </div>
                    </div>
                    <div className="edit">
                        <MdMoreHoriz fontSize="1.5rem"/>
                    </div>
                </div>
                <br />
                <div className="facebookimg">
                    <img src="https://th.bing.com/th/id/OIP.E3UNwm389l_qdOdJ6zbhCAHaE8?w=281&h=187&c=7&r=0&o=5&pid=1.7" alt="db"  style={{height:"40%",width:"100%"}}/>
                </div>
                <div className="comment">
                    <div className="like">
                        <FaRegThumbsUp color='grey'/>Like
                    </div>
                    <div className="like">
                        <FaCommentAlt color='grey'/>Comment
                    </div>
                    <div className="like">
                        <FaRegShareSquare color='grey'/>Share
                    </div>
                </div>
              </div>
              <div className="posted">
                <div className="poster">
                    <div className="facebook">
                        <img src="https://th.bing.com/th/id/OIP.ygTqdnNKaCM37SL2BpROQwHaFj?w=246&h=185&c=7&r=0&o=5&pid=1.7" alt="img" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>Siva
                        <div className="update">
                        </div>
                    </div>
                    <div className="edit">
                        <MdMoreHoriz fontSize="1.5rem"/>
                    </div>
                </div>
                <br />
                <div className="facebookimg">
                    <img src="https://th.bing.com/th/id/OIP.ygTqdnNKaCM37SL2BpROQwHaFj?w=246&h=185&c=7&r=0&o=5&pid=1.7" alt="db"  style={{height:"40%",width:"100%"}}/>
                </div>
                <div className="comment">
                    <div className="like">
                        <FaRegThumbsUp color='grey'/>Like
                    </div>
                    <div className="like">
                        <FaCommentAlt color='grey'/>Comment
                    </div>
                    <div className="like">
                        <FaRegShareSquare color='grey'/>Share
                    </div>
                </div>
              </div>
              <div className="posted">
                <div className="poster">
                    <div className="facebook">
                        <img src="https://th.bing.com/th/id/OIP.vUON6GigAA9cUvKP_VtWBQHaFj?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="img" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>Siva
                        <div className="update">
                        </div>
                    </div>
                    <div className="edit">
                        <MdMoreHoriz fontSize="1.5rem"/>
                    </div>
                </div>
                <br />
                <div className="facebookimg">
                    <img src="https://th.bing.com/th/id/OIP.vUON6GigAA9cUvKP_VtWBQHaFj?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="db"  style={{height:"40%",width:"100%"}}/>
                </div>
                <div className="comment">
                    <div className="like">
                        <FaRegThumbsUp color='grey'/>Like
                    </div>
                    <div className="like">
                        <FaCommentAlt color='grey'/>Comment
                    </div>
                    <div className="like">
                        <FaRegShareSquare color='grey'/>Share
                    </div>
                </div>
              </div>
            </div> 
        </div>
        <div className="Lside">
            <div className="contact">
                <div className="contacts">
                    Contacts
                </div>
                <div className="chaticon">
                    <div className="icons">
                        <MdVideoCall fontSize="1.8rem"/>
                    </div>
                    <div className="icons">
                        <FaSearch fontSize="1.6rem"/>
                    </div>
                    <div className="icons">
                        <MdMoreHoriz fontSize="1.6rem"/>
                    </div>
                     </div>
            </div>
            <div className="concise">
                <div className="profilee">
                    <img src="https://th.bing.com/th/id/OIP.VVtw73spR1nzT5mE_ZLNFAHaD_?w=303&h=180&c=7&r=0&o=5&pid=1.7" alt="logo"/>
                    Paven
                </div>
                <div className="profilee">
                    <img src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" />
                    Nivash
                </div>
                <div className="profilee">
                    <img src="https://th.bing.com/th/id/OIP.QDsl5OQGLLC5quAuVKSDMwHaEo?w=316&h=197&c=7&r=0&o=5&pid=1.7" alt="logo"/>
                    Priya
                </div>
                <div className="profilee">
                    <img src="https://th.bing.com/th?q=Tropical+Flowers&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247&thvar=defctrl" alt="logo" />
                    Malathy
                </div>
                <div className="profilee">
                    <img src="https://th.bing.com/th/id/OIP.ySwhxz6XuSm4yIXBV-0rRgHaE8?w=303&h=202&c=7&r=0&o=5&pid=1.7" alt="logo" />
                    Prabha
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main