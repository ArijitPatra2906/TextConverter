import React from 'react'
export default function Navbar(props) {
  return (
   <>
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href> {props.tittle}</a>
    <div className="collapse navbar-collapse" id="navbarNav"></div>

  <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode </label>
  </div>
  </div>
</nav>
</>
  )
}
