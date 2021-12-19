import React from 'react';
import './App.css';

var status={
  1:'In-Progress',
  2:'Completed',
  3:'Canceled'
}

var orderDetails={
  'name':'Allen Ford',
  'employeeId': 325821,
  'appointmenton':new Date().toLocaleDateString(),
  'email':'alan.form@email.nl',
  'phone':+31123456789,
  'status':status[1],
  'Door':'Mark',
  'Time':new Date(19348920300).toLocaleString(),
  'Avatar':'https://www.w3schools.com/howto/img_avatar.png',
  'Title':'This is the title text',
  'description':'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'

}




function App() {
  return (
    <>
    <div className="site-container">
      <div className="container">
        <div className="nav-container">
          <a href="#" className='nav-arrow'>{'<'}</a>
          <h1 className='nav-title'>{orderDetails.name}</h1>
          <span className='nav-text'>{orderDetails.employeeId}</span>
          <button className='nav-btn'>Print</button>
        </div>
      </div>
      <div className="container">
        <div className="customer-info">
          <p className="text">
            <span>Appointment</span>
            {orderDetails.appointmenton}
          </p>
          <p className="text">
            <span>Email:</span>
            {orderDetails.email}
          </p>
          <p className="text">
            <span>Phone</span>
            {orderDetails.phone}
          </p>
        </div>
      </div>
      <div className="container order-info-container">
        <div className="order-info grid">
          <p className="text">
            <span>Status</span>
            <ul>
              <li>{orderDetails.status}</li>
            </ul>
          </p>
          <p className="text">
            <span>Door</span>
            {orderDetails.Door}
          </p>
          <p className="text">
            <span>Time</span>
            {orderDetails.Time}
          </p>
        </div>
      </div>
      <div className="container footer">
        <div className="product-list">
          <input type="checkbox" className='check-box' />
          <img src={orderDetails.Avatar} alt="" />
          <div className="about-product">
          <h3>{orderDetails.Title}</h3>
          <p>{orderDetails.description}</p>
          </div>
          <a href="#" className='right-arrow'>{'>'}</a>
        </div>
      </div>
    </div>



    </>
  );
}

export default App;
