//index.js
import { Button } from "@/components/ui/button"
import MyLayout from '../app/layout';
import Link from 'next/link';

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
    const audio = new Audio('/Fart3.mp3');
    audio.play();
  };

  return (
    <MyLayout>
      <div>
        <h1>Fart NOW</h1>
        <p>Click to fart</p>
        <Button onClick={handleButtonClick}>FART</Button>
        <p id="created-by">Created by buildaboat373</p>
        <Link href="/wetter">
          <Button
            variant="outline"
            style={{
              fontSize: '2vw', // Adjust as needed
              padding: '2vw 2vw', // Adjust as needed
              marginTop: '1vw', // Adjust as needed
              backgroundColor: 'transparent',
              borderRadius: '3vw', // Adjust as needed
              color: '#d0d0d0',
              boxShadow: '0 0 10px 0 rgb(0, 20, 0)',
            }}
          >Go to Wetter Page</Button>
        </Link>
      </div>
    </MyLayout>
  );
}
