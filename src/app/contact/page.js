import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>

      <iframe
        width={100}
        height={450}
        className={styles.mapping}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=Lokerpara%20Tangail+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </>
  );
};

export default Contact;
