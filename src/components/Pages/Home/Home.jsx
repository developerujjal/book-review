import HeroSection from "../../LayOut/HeroSection/HeroSection";
import BookSection from "../../LayOut/BookSection/BookSection";



const Home = () => {
    return (
        <>
            <section className="pb-8 lg:pt-3 lg:pb-14">
                <HeroSection />
            </section>
            <section className="pb-8 lg:pt-4 lg:pb-14">
                <BookSection />
            </section>
        </>
    );
};

export default Home;