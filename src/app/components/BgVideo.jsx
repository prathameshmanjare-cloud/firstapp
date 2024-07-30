import Link from 'next/link';

const BackgroundVideo = () => {
  return (
  <>   
     <div className="relative overflow-hidden h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
          <Link href="/task">
          Create your To Do List
          </Link>
          </h1>
        </div>
      </div>
    </div>   
  </>
      
  
  );
};

export default BackgroundVideo;
