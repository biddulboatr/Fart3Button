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
          <Button id="bottom-button" variant="outline">Go to Wetter Page</Button>
        </Link>
      </div>
    </MyLayout>
  );
}
