import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout';
// import { Forms } from './pages/Forms';
import { Home } from './pages/Home';
// import { UseEffect } from './pages/UseEffect'
// import { Closure } from './pages/Closure';
import { Refs } from './pages/Refs';

const UseEffect = lazy(() => wait(1000).then( () => import("./pages/UseEffect") ))

const Closure = lazy(() => wait(1000).then( () => import("./pages/Closure").then(     // For non-default but named exports 
  (module: any) => { return { default: module.Closure }}   // we are renaming our import to default
) ))

 
export function Router () {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/forms' element={<Forms />} />
          <Route path='/use-effect' element={<UseEffect />} />
          <Route path='/closure' element={<Closure />} />
          <Route path='/refs' element={<Refs />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

function wait(time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

/*

LazyLoading

Useful when you have a large project and all of its files are being downloaded on the very first load of a page, and that's something that can take a long time.
We can delay the download of some files until we access those pages doing code spliting.
the easiest way to do code splitting is with "dynamic import"
dynamic import will only import a piece of code when we actually use it on the page

ex: import("../sum.js").then(module =>  {
  module.sum(2,2)
})


on the example above we are importing a function from a file using an async function import(), and have a then method wich will return a "module" object  inside of it, which has some properties like "default" (when the file has a default export we use module.default) or access direct de name of what is being exported "module.sum"
To do this with a react component we must use React.lazy

OBS: React needs to know that you are lazy loading different things, so you need to use "Suspense" component to do that. Then erverything inside this Element has to be lazily loaded which is, it might not be available right a way
OBS2: On Suspense you need do pass de property "fallback" that is used to show an alternative content while the content is not loaded yet


USAGE: When you have a large content only for admin, you don't even need to load that content if you are not an admin. You don't need an IF statement! just a conditional render for the admin content, wrapped on the "Suspense" element! and the AdminContnet lazily loaded
*/

