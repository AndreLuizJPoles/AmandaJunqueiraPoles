import { PhoneIcon } from "@heroicons/react/24/outline";
import { ContactCard, TitleCard, type IContactCard } from "../components";

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