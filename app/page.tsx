import MeetUs from "./components/MeetUs";
import Nav from "./components/nav";
import Welcome from "./components/Welcome/Welcome";
export default function Home() {
  return (
    <div>
      <Nav />
      <Welcome />
      <MeetUs />
    </div>
  );
}
