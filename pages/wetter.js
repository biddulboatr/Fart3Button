//wetter.js
import { Button } from "@/components/ui/button"
import MyLayout from '../app/layout';
import styles from './wetter.module.css';
import Link from 'next/link';

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
    const audio = new Audio('/WetFart.mp3');
    audio.play();
  };

  return (
    <MyLayout>
      <div>
        <h1>Fart NOW</h1>
        <p>Click to fart wetly</p>
        <Button 
        style={{
            backgroundColor: 'rgb(47, 255, 151)'
          }}
        onClick={handleButtonClick}>FART</Button>
        <p id="created-by">Created by buildaboat373</p>
        <Link href="/">
          <Button
            variant="outline"
            style={{
              fontSize: '2vw', // Adjust as needed
              padding: '2vw 3vw', // Adjust as needed
              marginTop: '1vw', // Adjust as needed
              backgroundColor: 'transparent',
              borderRadius: '3vw', // Adjust as needed
              color: '#d0d0d0',
              boxShadow: '0 0 10px 0 rgb(0, 20, 0)',
            }}
          >Go Back</Button>
        </Link>
      </div>
    </MyLayout>
  );
}
