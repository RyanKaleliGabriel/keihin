import AppLayout from "../ui/AppLayout";
import ContactUs from "../features/Landing/ContactUs";
import ContactDetails from "../features/Contact/ContactDetails";
import { useLocation } from "react-router-dom";

function Contact() {
  let location = useLocation();
  console.log(location);
  return (
    <AppLayout>
      <ContactUs />
      <ContactDetails />
    </AppLayout>
  );
}

export default Contact;
