// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path='/' page={StartPage} name='start' />
      <Private unauthenticated='wrong'>
        <Route path='/right' page={RightPage} name='right' />
      </Private>
      <Route path='/wrong' page={WrongPage} name='wrong' />
    </Router>
  )
}

export default Routes
