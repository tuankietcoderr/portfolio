import AnimatedCursorElement from '@/app/_components/AnimatedCursorElement';
import {EnvelopeIcon, PhoneArrowUpRightIcon} from '@heroicons/react/24/outline';

const ContactInformation = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Contact Information</h3>
      <p>
        Fill out the form on the right to get in touch with me or hire me. I
        will get back to you as soon as possible.
      </p>
      <div className="space-y-2">
        <AnimatedCursorElement>
          <section
            className="interactable flex gap-2 items-center"
            data-interact-type="email">
            <EnvelopeIcon className="size-6" />
            <p>
              <a href="mailto:tuankietwebdevfw@gmail.com">
                tuankietwebdevfw@gmail.com
              </a>
            </p>
          </section>
        </AnimatedCursorElement>
        <AnimatedCursorElement>
          <section
            className="interactable flex gap-2 items-center"
            data-interact-type="call">
            <PhoneArrowUpRightIcon className="size-6" />
            <p>
              <a href="tel:+84348071412">+84348071412</a>
            </p>
          </section>
        </AnimatedCursorElement>
      </div>
    </div>
  );
};

export default ContactInformation;
