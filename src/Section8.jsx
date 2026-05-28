import cta from './assets/cta.svg'
function Section8() {
  return (
     <section className='py-10'>
      <div className='container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-8 shadow-sm rounded-2xl'>
        <img src={cta} alt="" className="w-[70%] sm:w-[50%] lg:w-[30%]"/>
        <div className='flex items-center lg:items-start flex-col gap-3 text-center lg:text-left'>
          <h2 className='font-semibold text-2xl sm:text-3xl'>Ready to get started?</h2>
          <p className='text-gray-500 text-sm max-w-[300px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, enim et? Aut enim distinctio eum!</p>
          <button className='px-7 py-4 rounded-full bg-[#00ABAA] text-white text-sm font-semibold transition-transform duration-300 hover:scale-105'>Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default Section8
