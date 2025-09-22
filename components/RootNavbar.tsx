import React from 'react';
import { Link, useLoaderData, useLocation, useNavigate, useParams } from 'react-router';
import { cn } from '~/lib/utilis';

// Example User type, adjust according to your loader
interface User {
  status: 'admin' | 'user';
  imageUrl?: string;
}
// later you need to add firebase database to  import{logoutUser} from "~/firebase"
const RootNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<{ tripId: string }>();
  const user = useLoaderData() as User;

  const handleLogout = async () => {
    // await logoutUser();
    navigate('/sign-in');
  };

  const isTravelPage = location.pathname === `/travel/${params.tripId}`;

  return (
    <nav className={cn(isTravelPage ? 'bg-white' : 'glassmorphism', 'w-full fixed z-50')}>
      <header className='root-nav wrapper flex justify-between items-center'>
        {/* Logo */}
        <Link to='/' className='flex items-center gap-2'>
          <img src="/assets/icons/logo.svg" alt="logo" className='w-7 h-7' />
          <h1 className='text-xl font-bold'>Worldly</h1>
        </Link>

        {/* User Section */}
        <aside className='flex items-center gap-4'>
          {user.status === 'admin' && (
            <Link to='/dashboard' className='text-sm font-medium text-gray-700 hover:text-gray-900'>
              Admin Panel
            </Link>
          )}

          <img
            src={user?.imageUrl || `/assets/image/david.webp`}
            alt="user"
            referrerPolicy='no-referrer'
            className='w-8 h-8 rounded-full object-cover'
          />

          <button onClick={handleLogout} className='cursor-pointer p-1 rounded hover:bg-gray-200'>
            <img src="/assets/icons/logout.svg" alt="logout" className='w-6 h-6 rotate-180' />
          </button>
        </aside>
      </header>
    </nav>
  );
};

export default RootNavbar;
