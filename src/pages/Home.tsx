import { AboutMe } from "../sections/AboutMe";
import { Contacts } from "../sections/Contacts";
import { Services } from "../sections/Services";
import { cards_carrousel } from "../components/componentsMock.json";

export function Home() {
  return (
    <>
      <header></header>
      <main>
        <AboutMe />
        {cards_carrousel && <Services cards={cards_carrousel} />}
        {/* <Services cards={[]}/> */}
        <Contacts />
      </main>
      <footer></footer>
    </>
  )
}