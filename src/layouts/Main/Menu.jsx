import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const RouterLink = ({ href, children }) => (
  <Nav.Link as={Link} to={href}>
    {children}
  </Nav.Link>
);

export default function Menu() {
  return (
    <Nav className='mr-auto'>
      <RouterLink href='/home'>Home</RouterLink>
      <RouterLink href='/documents'>Documents</RouterLink>
    </Nav>
  );
}
