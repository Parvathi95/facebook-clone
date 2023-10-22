import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Users.css'
import {Container,Row,Col} from 'react-bootstrap'

export default function Users() {
  return (
  <div className="container">
    <div className="row">
      <div className="col">
        <div className='people'><h1>People You May Know</h1></div>
      <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.LfBtLCx5jWjmzpI_LDs5TwHaL-?w=115&h=180&c=7&r=0&o=5&pid=1.7" className='user-img'/>
      <Card.Body>
      <Card.Title className='card-title'>Harini</Card.Title>
      </Card.Body>
      <Button variant="primary" className='user-btn'>Add Friends</Button>
      <Button variant="primary" className='user-btn'>Delete</Button>
      
      </Card>
      </div>
      <div className="col">
      <Card className='cards'>
      <Card.Img variant="top" src="https://images.pexels.com/photos/7567426/pexels-photo-7567426.jpeg?auto=compress&cs=tinysrgb&w=600" className='user-img'/>
      <Card.Body>
        <div className="card-text">
      <Card.Title className='card-title'>Paven</Card.Title></div>
      </Card.Body>
      <Button variant="primary" className='user-btn'>Add Friends</Button>
      <Button variant="primary" className='user-btn'>Delete</Button>
      </Card>
      </div>
      <div className="col">
      <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.cg6McJ4euYk8Fw1kxsGwNAHaHa?w=212&h=212&c=7&r=0&o=5&pid=1.7" className='user-img'/>
      <Card.Body>
        <div className="card-text">
      <Card.Title className='card-title'>Suganthi</Card.Title></div>
      </Card.Body>
      <Button variant="primary" className='user-btn'>Add Friends</Button>
      <Button variant="primary" className='user-btn'>Delete</Button>
      </Card>
      </div>
      <div className="col">
      <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th?q=WhatsApp+Profile+for+Girls&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247&thvar=defctrl" className='user-img'/>
      <Card.Body>
        <div className="card-text">
      <Card.Title className='card-title'>Malathy</Card.Title></div>
      </Card.Body>
      <Button variant="primary" className='user-btn'>Add Friends</Button>
      <Button variant="primary" className='user-btn'>Delete</Button>
      </Card>
      </div>
      <div className="col">
      <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.5X8UEZhoJiADEL4xFMrkigHaJy?w=132&h=180&c=7&r=0&o=5&pid=1.7" className='user-img'/>
      <Card.Body>
        <div className="card-text">
      <Card.Title className='card-title'>Krish</Card.Title></div>
      </Card.Body>
      <Button variant="primary" className='user-btn'>Add Friends</Button>
      <Button variant="primary" className='user-btn'>Delete</Button>
      </Card>
      </div>
      <div className="col">
      <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.CTyjAl-sKq9X3gC520IUNwHaKU?w=150&h=209&c=7&r=0&o=5&pid=1.7" className='user-img'/>
      <Card.Body>
        <div className="card-text">
      <Card.Title className='card-title'>Priya</Card.Title></div>
      </Card.Body>
      <Button variant="primary" className='user-btn'>Add Friends</Button>
      <Button variant="primary" className='user-btn'>Delete</Button>
      </Card>
      </div>
      <div className="col">
      <Card className='cards'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.k7cvISTCGQMuouTCTHWYUQHaJW?w=169&h=213&c=7&r=0&o=5&pid=1.7" className='user-img'/>
      <Card.Body>
        <div className="card-text">
      <Card.Title className='card-title'>Praba</Card.Title></div>
      </Card.Body>
      <Button variant="primary" className='user-btn'>Add Friends</Button>
      <Button variant="primary" className='user-btn'>Delete</Button>
      </Card>
      </div>
    </div>
  </div>
  )
}

