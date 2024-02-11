import AppLayout from "../ui/AppLayout";
import ContactUs from "../features/Landing/ContactUs";
import ContactDetails from "../features/Contact/ContactDetails";

function Contact() {
  return (
    <AppLayout>
      <ContactUs />
      <ContactDetails />
    </AppLayout>
  );
}

export default Contact;
