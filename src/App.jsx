
// import {BrowserRouter, Routes,Route} from 'react-router-dom'
// import { Loginform } from './components/loginform'
// import { RegisterForm } from './components/registerform'
// import { Home } from './components/Home'
// import { Contacts } from './components/Contacts'
// import { Productdetails } from './components/Productdetails'
// import { Homepage } from './components/Homepage'
// import NotFound from './components/NotFound'





// function App() {
  

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/Registerform" element={<RegisterForm />} />
//         <Route path="/Loginform" element={<Loginform/>} />
//         <Route path="/Contacts"  element={<Contacts/>} />
//         <Route path="/productdetails" element={<Productdetails />} />
//         <Route path="/productdetails/:id" element={<Productdetails />} />
//         <Route path="/Homepage" element={<Homepage/>} />
//         <Route path='*' element={<NotFound/>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App





import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Rootlayout from './app/Rootlayout.jsx'

import Publiclayout from './app/public/Publiclayout.jsx'
import { Homepage } from './app/public/Homepage.jsx'
import { Productdetails } from './app/public/Productdetails.jsx'
import { Contacts } from './app/public/Contacts.jsx'

import Authlayout from './app/auth/Authlayout.jsx'
import { Loginform } from './app/auth/Loginform.jsx'
import { RegisterForm } from './app/auth/Registerform.jsx'

import NotFound from './components/NotFound'

import Privatelayout from './app/private/Privatelayout.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout/>,
      children: [
        {
          path: "/",
          element: <Publiclayout/>,
          children: [
            {
              index: true,
              element: <Homepage />
            },
            {
              path: 'Productdetails',
              element: <Productdetails/>
            },
            {
              path: 'Contacts',
              element: <Contacts/>
            }
          ]
        },
  
  
        {
          path: "auth",
          element: <Authlayout/>,
          children: [
            {
              path: "Loginform",
              element: <Loginform/>
            },
            {
              path: "Registerform",
              element: <RegisterForm />
            }
          ]
        },
  
  
  
        // {
        //   path: "private",
        //   element: <Privatelayout />,
        //   children: [
        //     {
        //       index: true,
        //       element: <PrivatePage />
        //     }
        //   ]
        // }
      ]
    }
  ])
  
  
  return (
    <RouterProvider router={router}/>
  )
}
export default App





