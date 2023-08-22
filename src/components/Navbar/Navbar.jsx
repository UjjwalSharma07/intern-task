
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h2>YourChallenge</h2>
      <ul>
        <li><a href="/" class="active">Product</a></li>
        <li><a href="/">Download</a></li>
        <li><a href="/">Pricing</a></li>
      </ul>
    </div>
  )
}

export default Navbar
