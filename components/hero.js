const HeroSection = () => (
    <section id="hero" name="hero" className="hero">
        <div className="hero-body">
            <div className="container heroimage">
                <h1 className="title">
                    Hero title
                </h1>
                <h2 className="subtitle">
                    Hero subtitle
                </h2>
            </div>
            <style jsx>{`
                .hero-body{
                    margin-top:50px;
                    background-image: url('/static/heroimg.jpg');
                    width:100%;
                }
            `}</style>
        </div>
    </section>
)

export default HeroSection