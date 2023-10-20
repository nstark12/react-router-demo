import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="d-flex justify-content-center gap-5 bg-dark p-3">
            <Link to="/" className="text-light text-decoration-none">
                Home
            </Link>
            <Link to="blog" className="text-light text-decoration-none">
                Blog
            </Link>
            <Link to="about" className="text-light text-decoration-none">
                About
            </Link>
            <Link to="contact" className="text-light text-decoration-none">
                Contact
            </Link>
        </nav>
    )
}

export default Navbar