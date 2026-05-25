import mainPage from './assets/banner-art.svg' 

function Section1() {
  return (
    <>
      <main className='container mx-auto flex items-center justify-between flex-col gap-4 mt-10 '>
        <h2 className='md:w-[60%] w-[80%]  text-center' >Let us solve your critical website development challenges</h2>
        <p className='md:w-[60%] w-[80%]  text-center py-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil
          enim maxime corporis cumque totam aliquid nam sint inventore optio
          modi neque laborum officiis necessitatibus.
        </p>
      <img className='w-[60%]' src={mainPage} alt="merkezi sekil" />
      </main>
    </>
  )
}

export default Section1
