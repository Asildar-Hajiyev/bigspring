import banner from './assets/banner-bot.svg'

function Section7() {
  return (
    <section className='py-10'>
       <div className='container mx-auto flex items-center justify-between flex-col gap-4 my-4 p-2'>
         <h2 className='w-[90%] sm:w-[70%] lg:w-[50%] text-center font-semibold text-2xl sm:text-3xl md:text-4xl'> Experience the best workflow with us</h2>
        <img src={banner} alt="" />
       </div>
    </section>
  )
}

export default Section7
