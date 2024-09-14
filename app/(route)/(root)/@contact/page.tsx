import ContactForm from './_components/ContactForm';
import ContactInformation from './_components/ContactInformation';

const page = () => {
  return (
    <div className="mx-[10%] space-y-8 mt-40">
      <h2 className="text-6xl font-bold">Contact</h2>
      <div className="border-2 border-black p-4 bg-[#E7FBE6] grid grid-cols-[40%_auto] gap-4">
        <ContactInformation />
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
