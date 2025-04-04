import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center text-center lg:text-left p-12">
      <div className="lg:w-1/2">
        <h2 className="text-lg text-blue-500">Welcome to my site</h2>
        <h1 className="text-4xl font-bold text-gray-800">
          Hi, I&apos;m <span className="text-blue-600">Sachina</span>, a <span className="text-brown-600">UI UX Designer</span>.
        </h1>
        <p className="text-gray-600 max-w-lg mt-4">
          I am a focused and talented B.Sc.CSIT student currently pursuing my bachelor degree from Asian School of Management and Technology.
        </p>
        <div className="mt-6 space-x-4">
          <Link
             href="https://mail.google.com/mail/?view=cm&fs=1&to=sachina@example.com&su=Hire%20Me&body=Hello,%20I%20want%20to%20discuss%20a%20project%20with%20you."
             target="_blank"
             rel="noopener noreferrer"
             className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Hire Me
          </Link>
          <Link href={"https://github.com/munibaweb123"} download={true} className='text-blue-500 border-2 border-blue-500 px-4 py-2 rounded-md'>See my projects</Link>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <div className="relative w-60 h-60 lg:w-80 lg:h-80">
          <div className="absolute inset-0 bg-blue-500 rounded-bl-[140px] -left-5 -bottom-1 right-10 top-10 -rotate-2"> </div>
       
          <Image
        src="/profile.png"
        alt="Profile Picture"
        width={300}
        height={300}
        className="relative z-10 rounded-bl-[140px] shadow-lg "
          />
          </div>
         
     
      </div>
      
    </section>
  );
}