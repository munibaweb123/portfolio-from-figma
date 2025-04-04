import Link from 'next/link';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import {Menu,X} from 'lucide-react';

import {
  Sheet,
 
  SheetContent,
  SheetDescription,
 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="flex justify-between p-6 items-center shadow-md max-w-6xl mx-auto">
     <div className='rounded-full bg-blue-500 text-white p-4 h-20 w-20 flex items-center justify-center'>
     <h1 className="font-bold text-4xl">S</h1>
     </div>
      <nav className="space-x-6 items-center hidden md:flex">
        <Link href="/" className="flex items-center text-gray-700 hover:text-yellow-600">
          <AiOutlineHome className="mr-1" size={24}/> Home
        </Link>
        <Link href="/about" className="flex items-center text-gray-700 hover:text-yellow-600">
          <AiOutlineUser className="mr-1" size={24}/> About Me
        </Link>
        <Link href="/contact" className="flex items-center text-gray-700 hover:text-yellow-600">
          <AiOutlinePhone className="mr-1" size={24}/> Contact Me
        </Link>
      </nav>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
        <Button variant="outline"><Menu/></Button>
          </SheetTrigger>
          <SheetContent>
        <SheetHeader>
          <SheetTitle className='font-bold'>Portfolio</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
          <Link href="/" className="flex items-center text-gray-700 hover:text-yellow-600">
            <AiOutlineHome className="mr-1" size={24}/> Home
          </Link>
          <Link href="/about" className="flex items-center text-gray-700 hover:text-yellow-600">
            <AiOutlineUser className="mr-1" size={24}/> About Me
          </Link>
          <Link href="/contact" className="flex items-center text-gray-700 hover:text-yellow-600">
            <AiOutlinePhone className="mr-1" size={24}/> Contact Me
          </Link>
        </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}