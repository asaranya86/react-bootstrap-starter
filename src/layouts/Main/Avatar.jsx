import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import { useAuth } from '../../auth';

export default function Avatar() {
  const { user, signout } = useAuth();
  if (!user) {
    return (
      <Button className='ml-4' variant='primary' as={Link} to='/login'>
        Login
      </Button>
    );
  }
  return (
    <Dropdown navbar alignRight>
      <Dropdown.Toggle
        as='figure'
        id='dropdown-basic'
        className='mb-0 ml-4 btn'>
        <Figure.Image
          className='mb-0 rounded-circle bg-white'
          width={50}
          src='https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={signout}>Signout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
