import Head from 'next/head';

export default function UpdateRequired() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 20px',
      backgroundColor: '#f8f9fa',
    }}>
      <Head>
        <title>System Update Required</title>
        <meta name="description" content="System Update Required" />
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #f8f9fa;
            color: #333;
          }
        `}</style>
      </Head>
      <main style={{
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#e53e3e',
            marginBottom: '1rem',
          }}>System Update Required</h1>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#4a5568',
          }}>
            We detected outdated Next.js packages and Sanity CMS components. 
            Please update to the latest versions to ensure optimal performance and security.
          </p>
        </div>
      </main>
    </div>
  );
}

// Fetching data from Sanity for blogs
export async function getServerSideProps() {
  const query = `*[_type == "blog"]{_id, title, briefContent, image, uuid}`;
  const blogs = await sanityClient.fetch(query);

  return {
    props: {
      blogs,
    },
  };
}