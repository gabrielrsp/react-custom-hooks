import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout';
import { Forms } from './pages/Forms';
import { Home } from './pages/Home';
import { UseEffect } from './pages/UseEffect'
import { Closure } from './pages/Closure';
import { Refs } from './pages/Refs';

export function Router () {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/use-effect' element={<UseEffect />} />
        <Route path='/closure' element={<Closure />} />
        <Route path='/refs' element={<Refs />} />
      </Route>
    </Routes>

  );
}