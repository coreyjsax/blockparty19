const AboutSection = () => (
    <section id="about" name="about" className="section">
        <div className="container">
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2>
        </div>
        <style jsx>{`
            .section{
                -webkit-box-shadow: -4px -5px 18px -4px rgba(0,0,0,0.65);
-moz-box-shadow: -4px -5px 18px -4px rgba(0,0,0,0.65);
box-shadow: -4px -5px 18px -4px rgba(0,0,0,0.65);
            }
        `}</style>
    </section>
)
   
export default AboutSection