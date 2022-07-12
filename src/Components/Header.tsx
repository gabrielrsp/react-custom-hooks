import { Link } from "react-router-dom";

export function Header () {

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', background: '#2f3337' }}>
        <Link style={{ color: '#fff' }} to="/"> <h1> HOME </h1></Link>
        <Link style={{ color: '#fff' }} to="/forms"> <h1> FORMS </h1></Link>
      </div>
    </>



  )

}