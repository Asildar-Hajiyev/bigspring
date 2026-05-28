import mainPage from './assets/banner-art.svg' 

function Section1() {
  return (
    <>
      <main className='container mx-auto flex items-center justify-between flex-col gap-4 mt-10 '>
        <h2 className="w-[90%] sm:w-[70%] lg:w-[50%] text-center font-semibold text-2xl sm:text-3xl md:text-4xl" >Let us solve your critical website development challenges</h2>
        <p className="w-[90%] sm:w-[70%] lg:w-[50%] text-center text-sm my-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil
          enim maxime corporis cumque totam aliquid nam sint inventore optio
          modi neque laborum officiis necessitatibus.
        </p>
      <img className='w-[90%] sm:w-[70%] md:w-[60%]' src={mainPage} alt="merkezi sekil" />
      </main>
    </>
  )
}

export default Section1
