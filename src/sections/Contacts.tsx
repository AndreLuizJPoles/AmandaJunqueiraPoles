import { PhoneIcon } from "@heroicons/react/24/outline";
import { TitleCard } from "../components/TitleCard/TitleCard";
import { ContactCard, type IContactCard } from "../components/ContactsCard/ContactCard";

interface ContactsProps {
  title: string,
  items: Array<IContactCard>
}

export function Contacts({ title, items }: ContactsProps) {
  return (
    <>
      <TitleCard title={title} icon={PhoneIcon} />
      <ContactCard items={items}></ContactCard>
    </>
  )
}