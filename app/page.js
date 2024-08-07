import Image from "next/image";
import Link from "next/link";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'white',
    textAlign: 'center', // Center text
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#FFD580', // Assuming this is your button color
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none', // Ensures no underline for the Link
    display: 'inline-block', // To ensure the button styles are applied correctly
  },
}

export default function Home() {
  return (
    <main style={styles.container}>
      <div>
        <h1 style={styles.heading}>Article 26 Website</h1>
        <Link href="/login" passHref>
          <button style={styles.button}>Login</button>
        </Link>
      </div>
    </main>
  );
}
