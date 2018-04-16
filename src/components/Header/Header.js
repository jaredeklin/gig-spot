// import React from 'react';

// export const Header = ({location}) => {

//   return (
//     <header className="App-header">     
//       <h1>Gig Spot</h1>
//       {
//         location.pathname === '/main' &&
//         <div className='change-location'>
//         <p>Update location:</p>
//         <LocationForm id='main-form' />
//         </div>
//       }
//       {
//         location.pathname.includes('/event-details') &&
//         <div className='change-location'>
//         <NavLink to='../main' className='home-button'>Home</NavLink>
//         </div>
//       }
//     </header>    
//   )
// }

// export const mapStateToProps = (state) => ({
//   location
// })

// export default connect(mapStateToProps)(Header);