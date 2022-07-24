import React from 'react';
import './components.css';

const Navbar = () => {
    return ( 
        <nav class="navbar fixed-top navbar-expand-lg ">
  <div class="container align-items-container">
    <a class="navbar-brand fs-2 fw-bold" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapseToggle" aria-controls="navbarCollapseToggle" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapseToggle">
      <div class="navbar-nav mx-lg-5 px-lg-5 fs-4">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Skills</a>
        <a class="nav-link" href="#">Work</a>
        <a class="nav-link" href="#">Experience</a>
        <a class="nav-link" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
     );
}
 
export default Navbar;