function Home() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20' }}>
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
        <img src="/images/background.jpg" alt="" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', objectPosition: 'center', borderRadius: '5px' }} />
      </div>
    );
  }

  export default Home;