import { Link } from "react-router-dom";

export function Header () {

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', background: '#2f3337' }}>
        <Link style={{ color: '#fff' }} to="/"> <h1> HOME </h1></Link>
        <Link style={{ color: '#fff' }} to="/forms"> <h1> FORMS </h1></Link>
        <Link style={{ color: '#fff' }} to="/use-effect"> <h1> USE EFFECT </h1></Link>
        <Link style={{ color: '#fff' }} to="/use-transition"> <h1> USE TRANSITION </h1></Link>
        <Link style={{ color: '#fff' }} to="/closure"> <h1> CLOSURES </h1></Link>
        <Link style={{ color: '#fff' }} to="/refs"> <h1> REFS </h1></Link>
      </div>
    </>



  )

}