import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1 style={{fontSize:'4rem'}}>Ashutosh Bhardwaj</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam, optio doloribus reiciendis laudantium tempora necessitatibus nemo, quia ratione error delectus excepturi quod qui, officiis deleniti soluta eaque voluptatibus tenetur.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="" className='img' />
            </div>
        </div>
    </section>
  )
}
export default Hero