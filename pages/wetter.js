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
          <Button id="bottom-button" variant="outline">Go to Wetter Page</Button>
        </Link>
      </div>
    </MyLayout>
  );
}
