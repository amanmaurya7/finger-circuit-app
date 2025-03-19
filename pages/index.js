// Redirect to index.html in the public directory
export default function Home() {
  // Use useEffect to perform the redirection after component mounts
  if (typeof window !== 'undefined') {
    window.location.href = '/index.html';
  }
  
  // Return empty div as placeholder while redirection happens
  return <div></div>;
}
