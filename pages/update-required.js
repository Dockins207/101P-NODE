import React from 'react';
import Head from 'next/head';

const UpdateRequired = () => {
  return (
    <div style={styles.container}>
      <Head>
        <title>System Update Required - Maintenance</title>
        <meta name="description" content="System Update Required - Please update your system components" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #f8f9fa;
            color: #2d3748;
            line-height: 1.5;
          }
          #__next {
            height: 100%;
          }
        `}</style>
      </Head>
      
      <main style={styles.main}>
        <div style={styles.card}>
          <div style={styles.iconContainer}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={styles.icon}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          
          <h1 style={styles.title}>System Update Required</h1>
          
          <div style={styles.content}>
            <p style={styles.message}>
              We've detected that your system is running outdated versions of Next.js and Sanity CMS components. 
              To ensure optimal performance, security, and access to the latest features, please update to the 
              most recent versions of these packages.
            </p>
            
            <div style={styles.details}>
              <h3 style={styles.subtitle}>Required Updates:</h3>
              <ul style={styles.list}>
                <li>Next.js: Update to the latest stable version</li>
                <li>Sanity CMS: Update all Sanity-related packages</li>
                <li>Dependencies: Review and update all project dependencies</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
  },
  main: {
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    padding: '2.5rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  iconContainer: {
    marginBottom: '1.5rem',
  },
  icon: {
    color: '#e53e3e',
    width: '64px',
    height: '64px',
  },
  title: {
    color: '#2d3748',
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  content: {
    textAlign: 'left',
  },
  message: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#4a5568',
    marginBottom: '2rem',
  },
  details: {
    backgroundColor: '#f7fafc',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '2rem',
  },
  subtitle: {
    color: '#2d3748',
    fontSize: '1.2rem',
    marginTop: '0',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  list: {
    paddingLeft: '1.5rem',
    margin: '0',
  },
  contact: {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '0',
  },
  link: {
    color: '#3182ce',
    textDecoration: 'none',
    fontWeight: '500',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export default UpdateRequired;
