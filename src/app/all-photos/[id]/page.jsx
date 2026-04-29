import { Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";


const PhotoDetailsPage = async({params}) => {
    const {id}= await params;
    
     const res = await fetch("https://better-auth-next3.vercel.app/data.json");
    const photos=await res.json();
    
    const photo= photos.find(p=>p.id==id)
    

    return (
       <Card>
         <div className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                            <Image src={photo.imageUrl}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt={photo.title}
                            className='object-cover rounded-xl'
                            
                            >
            
                            </Image>
                            <Chip className='absolute right-2 top-2'>{photo.category}</Chip>
                        </div>
            <div>
                <h1 className='font-medium'>{photo?.title}</h1>
            <p>{photo.prompt}</p>
            <p>{photo.model}</p>
            <p>{photo.resolution}</p>
            <div>{photo.createdAt}</div>
            </div>
        </div>
        <div className='flex gap-5'>
                        <div className='flex items-center gap-2'>
                        <p><FaHeart /></p>
                        <p>{photo.likes}</p>
                    </div>
                    <Separator orientation='vertical'></Separator>
                    <div className='flex items-center gap-2'>
                        <p><FiDownload /></p>
                        <p>{photo.downloads}</p>
                        
                    </div>
                    </div>
                    
       </Card>
    );
};

export default PhotoDetailsPage ;