import Image from 'next/image'
import { Button } from "@/components/ui/button"





export default function Home() {
  
  return (
    <main className="flex ">
      
      <source src="/Fart3.mp3" type="audio/mp3" />

      <div>
      <h1>Welcome to My Next.js App!</h1>
      <p>This is the default landing page.</p>
      <Button>Button</Button>
    </div>
      
    </main>
  )
}