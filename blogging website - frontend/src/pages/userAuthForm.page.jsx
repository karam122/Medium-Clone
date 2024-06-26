import { Link } from 'react-router-dom';
import InputBox from '../components/input.component';
import googleIcon from '../imgs/google.png';
import AnimatioWrapper from '../common/page-animation';
const UserAuthForm = ({ type }) => {
  return (
    <AnimatioWrapper keyValue={type}>
      <section className='h-cover flex items-center justify-center'>
        <form className='w-[80%] max-w-[400px]'>
          <h1 className='text-4xl font-gelasio capitalize text-center mb-24'>
            {type == 'sign-in' ? 'Welcome Back' : 'Join us today'}
          </h1>
          {type !== 'sign-in' ? (
            <>
              <InputBox
                name='fullname'
                type='text'
                placeholder='Full name'
                icon='fi-rr-user'
              />
              <InputBox
                name='email'
                type='email'
                placeholder='Email'
                icon='fi-rr-envelope'
              />
              <InputBox
                name='password'
                type='password'
                placeholder='Password'
                icon='fi-rr-key'
              />
            </>
          ) : (
            <>
              <InputBox
                name='email'
                type='email'
                placeholder='Email'
                icon='fi-rr-envelope'
              />
              <InputBox
                name='password'
                type='password'
                placeholder='Password'
                icon='fi-rr-key'
              />
            </>
          )}
          <button type='submit' className='btn-dark center mt14'>
            {type}
          </button>

          <div className='relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold'>
            <hr className='w-1/2 border-black' />
            <p>OR</p>
            <hr className='w-1/2 border-black' />
          </div>
          <button className='btn-dark flex items-center justify-center gap-4 w-[90%]'>
            <img src={googleIcon} className='w-5' />
            Continue with google
          </button>
          {type == 'sign-in' ? (
            <p className='mt-6 text-dark-grey text-xl text-center'>
              Don't have an account ?{' '}
              <Link to='/signup' className='underline text-black ml-1 text-xl'>
                Join us today{' '}
              </Link>
            </p>
          ) : (
            <p className='mt-6 text-dark-grey text-xl text-center'>
              Already a member ?{' '}
              <Link to='/signin' className='underline text-black ml-1 text-xl'>
                Sign in here{' '}
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimatioWrapper>
  );
};

export default UserAuthForm;
