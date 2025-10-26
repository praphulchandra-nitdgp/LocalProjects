import Image from 'next/image';
import MyPhoto from './assets/My_photo.jpeg'

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-4">
      <div className="relative w-32 h-32 rounded-full overflow-hidden">

        <Image
        src={MyPhoto.src} 
        alt="Praphul Chandra" 
        fill
        className="object-cover"
      />
      </div>
      
      <div className="space-y-2 max-w-2xl">
        <h1 className="text-2xl font-bold leading-tight tracking-tight">
          Praphul Chandra
        </h1>
        <p className="text-base text-muted font-normal leading-normal">
          Aspiring Software Developer | AI/ML Enthusiast
        </p>
        <p className="text-base text-muted font-normal leading-normal">
          Passionate software developer with a focus on creating innovative solutions. 
          Experienced in full-stack development, cloud computing, and machine learning.
        </p>
      </div>
    </div>
  );
}