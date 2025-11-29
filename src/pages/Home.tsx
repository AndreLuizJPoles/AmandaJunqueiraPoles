import { AboutMe } from "../sections/AboutMe";
import { Contacts } from "../sections/Contacts";
import { Services } from "../sections/Services";

export function Home() {
  return (
    <>
      <header></header>
      <main>
        <AboutMe />
        <Services />
        <Contacts />
      </main>
      <footer></footer>
    </>
  )
}