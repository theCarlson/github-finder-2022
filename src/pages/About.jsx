const About = () => {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a
          href='https://www.udemy.com/course/react-front-to-back-2022/'
          className='text-[#61DBFB]'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a
            href='https://traversymedia.com'
            className='text-[#61DBFB]'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            Brad Traversy
          </a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-gray'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a
          className='text-[#61DBFB]'
          href='https://twitter.com/hassibmoddasser'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          Hassib Moddasser
        </a>
      </p>
    </>
  );
};

export default About;
