import { AboutMe } from "../sections/AboutMe";
import { Contacts } from "../sections/Contacts";
import { Services } from "../sections/Services";
import { services, about_me, contacts, top_menu } from "../components/componentsMock.json";
import { TopMenu } from "../components";

export function Home() {
  return (
    <>
      <header>
        <TopMenu items={top_menu.items} logoSrc={top_menu.logoSrc} logoAlt={top_menu.logoAlt} />
      </header>
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