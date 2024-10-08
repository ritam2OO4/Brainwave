import Section from './Section'
import {curve} from '../assets'

function Hero() {
  return (
    <Section className={"-mt-[8.25rem] pt-[12rem]"}
      crosses
      crossesOffset={"lg:translate-y-[5.25rem]"}
      customPaddings
      id={"hero"}>
      <div className='container relative'>
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]'>
          <h1 className='h1 mb-6'>Explore the posibilites of AI
            <br/>  chatting with 
            <span className='inline-block relative'>Brainwave{" "}
              <img src={curve} alt="curve" className='absolute top-full left-0 w-full xl:-mt-2' />
            </span>
            </h1>
        </div>
      </div>
    </Section>
  )
}

export default Hero
