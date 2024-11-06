// import MeetUs from "./components/MeetUs";
import Nav from "./components/nav";
import ScrollBySection from "./components/ScrollBySection";
// import Welcome from "./components/Welcome/Welcome";
export default function Home() {
  return (
    <div className="min-h-[100dvh]  scroll-smooth snap-y snap-mandatory">
      <Nav />
      {/* <Welcome />
      <MeetUs /> */}
      <ScrollBySection />
    </div>
  );
}
