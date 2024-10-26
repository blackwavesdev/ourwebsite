// import React, { useState } from "react";
const Nav = () => {
  //Navigations
  const links=[
        {name:'About', link:'/'},
        {name:'Services', link:'/'},
        {name:'Pricing', link:'/'},
        {name:'Blog', link:'/'}
  ]
  // const [Menu, setMenu] = useState(false);
  return <header className="bg-gray-900 text-gray-50 flex  justify-between p-1 box-border items-center">
  <div className="logo text-center basis-1/5">
      {/* <img src="" alt="" /> */}
      <p>black waves</p>
  </div>
  <nav className="basis-2/5">
      <ul className="flex justify-between bg-transparent p-4">
          {links.map((link ,index)=>(
              <li key={index}>
                  <a href={link.link}>{link.name}</a>
              </li>
          ))
          }
      </ul>
  </nav>
  <div className="contact text-center basis-1/5">
      <p>Contact</p>
  </div>
  <div className="menuBtn">

  </div>
</header>;
};

export default Nav;
