import Link from "next/link";

interface ContactDetailsProps {
  name: string;
  details?: React.ReactNode;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({
  name,
  details,
}) => (
  <div className="relative mt-[1rem] mb-[2rem]">
    <label className="leading-[1.75rem] text-opacity-100 text-[rgba(255,115,137,var(--tw-text-opacity))] text-[1.25rem] font-[700]">
      {name}
    </label>
    <div className="text-[1.125rem] leading-[1.75rem] text-opacity-100 text-[rgba(255,115,137,var(--tw-text-opacity))]">
      {details || (
        <Link
          href="https://www.google.com/maps/place/1+Afolabi+Lesi+St,+Ilupeju,+Lagos/@6.5579637,3.364944,20z/data=!4m13!1m7!3m6!1s0x103b8d8e6cec0a79:0x9067273ce8922c66!2s1+Afolabi+Lesi+St,+Ilupeju,+Lagos!3b1!8m2!3d6.5578744!4d3.3649306!3m4!1s0x103b8d8e6cec0a79:0x9067273ce8922c66!8m2!3d6.5578744!4d3.3649306"
          target="_blank"
        >
          ➤ Lagos Office : No 1, Afolabi Lesi Street, Ilupeju, Lagos | Abuja
          Office : St James House (2nd floor), Plot 1109/No. 167 Cadastral Zone
          A08 Ademola Adetokunbo Crescent, Wuse ll, Abuja- Nigeria
        </Link>
      )}
    </div>
  </div>
);

export const PhoneDetails: React.FC = () => (
  <>
    <Link
      href="tel:2347054435000"
      className="text-opacity-100 text-[rgba(255,214,220,var(--tw-text-opacity))]"
    >
      +2347054435000
    </Link>
    <Link
      href="tel:2347054435000"
      className="text-opacity-100 text-[rgba(255,214,220,var(--tw-text-opacity))]"
    >
      <span>, </span>+2347054435000
    </Link>
  </>
);

export const EmailDetails: React.FC = () => (
  <Link
    href="mailto:customerservice@gdl.com.ng"
    className="text-opacity-100 text-[rgba(255,214,220,var(--tw-text-opacity))]"
  >
    customerservice@gdl.com.ng
  </Link>
);
