import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
      </div>
      <ButtonGradient />
    </>
  )
}
export default App;
