import { AboutMe } from "../sections/AboutMe";
import { Contacts } from "../sections/Contacts";
import { Services } from "../sections/Services";
import { services, about_me, contacts } from "../components/componentsMock.json";

export function Home() {
  return (
    <>
      <header></header>
      <main>
        {about_me && <AboutMe { ...about_me } />}
        {services && <Services { ...services } />}
        {contacts && (
          <Contacts
            {...contacts}
            items={contacts.items.map((item: any) => ({
              ...item,
              value: item.value ?? ""
            }))}
          />
        )}
      </main>
      <footer></footer>
    </>
  )
}