import Bio from "./Bio"
import Social from "./Social"

const About = () => {
    return (
        <div id="about" key="About" className="w-full flex-col justify-center items-center mt-12">
            <Social />
            <Bio/>
        </div>
    )
}

export default About