import React from 'react'

export const BentoCard = ({src, title, description}) => {
    return(
        <div className='relative size-full'>
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
            )}
                </div>
            </div>
            
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-32'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-circular-web text-blue-50 text-lg'>Into the Metagame Layer</p>
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
        </div>
            <div className='border-hsla relative mb-7 h-96 w-full rounded-md overflow-hidden md:h-[65vh]'>
                <BentoCard
                    src="awwwards_public/public/videos/feature-1.mp4"
                    title={<>rad<b>i</b>ent</>}
                    description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    
                />
            </div>
        </div>
    </section>
  )
}

export default Features