'use client';
import AnimatedCursorElement from '@/app/_components/AnimatedCursorElement';
import Input from '@/app/_components/Input';
import TextArea from '@/app/_components/TextArea';
import {useState} from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof typeof form,
  ) => {
    setForm(prev => ({...prev, [name]: e.target.value}));
  };

  return (
    <div className="grid grid-cols-2 gap-4 border-2 border-black bg-white p-4">
      <Input
        placeholder="First Name"
        name="firstName"
        onChange={e => onChange(e, 'firstName')}
        value={form.firstName}
      />
      <Input
        placeholder="Last Name"
        name="lastName"
        onChange={e => onChange(e, 'lastName')}
        value={form.lastName}
      />
      <Input
        placeholder="Email"
        type="email"
        name="email"
        onChange={e => onChange(e, 'email')}
        value={form.email}
      />
      <Input
        placeholder="Phone Number"
        type="tel"
        name="phoneNumber"
        onChange={e => onChange(e, 'phoneNumber')}
        value={form.phoneNumber}
      />
      <TextArea
        placeholder="Message"
        containerClassName="col-span-2"
        name="message"
        onChange={e => onChange(e, 'message')}
        value={form.message}
      />
      <AnimatedCursorElement>
        <button className="self-start w-28 bg-[#00bf63] text-black py-2 border-2 border-black font-medium">
          Submit
        </button>
      </AnimatedCursorElement>
    </div>
  );
};

export default ContactForm;
