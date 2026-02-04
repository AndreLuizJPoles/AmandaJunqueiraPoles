import { AboutMe } from "../sections/AboutMe";
import { Contacts } from "../sections/Contacts";
import { Services } from "../sections/Services";
import { services, about_me } from "../components/componentsMock.json";

export function Home() {
  return (
    <>
      <header></header>
      <main>
        {about_me && <AboutMe { ...about_me } />}
        {services && <Services { ...services } />}
        <Contacts />
      </main>
      <footer></footer>
    </>
  )
}