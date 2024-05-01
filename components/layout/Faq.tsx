import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { FaPlus, FaSmile } from "react-icons/fa";
import { HandWithHeart, SmileFace } from "../icons";
import { title } from "../primitives";

const faqList: Array<{ title: string }> = [
  {
    title: "Why choose our medical for your family?",
  },
  {
    title: "Why we are different from others?",
  },
  {
    title: "Trusted & experience senior care & love",
  },
  {
    title: "How to get appointment for emergency cases?",
  },
];

const Faq = () => {
  return (
    <section className="flex flex-col justify-center gap-16 w-full pt-6 pb-10">
      <div className="text-center font-semibold flex flex-col gap-2">
        <h6 className="text-primary">Get Your Answer</h6>
        <h3 className={title({ color: "blue" })}>Frequently Asked Questions</h3>
      </div>
      <div className="flex justify-center items-center gap-10 md:gap-20">
        <div className="relative">
          <Image
            className="shadow-xl"
            removeWrapper
            src="./images/happy-customer.png"
            width={500}
          />
          <div className="absolute shadow-xl bottom-20 -left-20 z-20 gap-4 flex items-center bg-primary-foreground p-6 rounded-lg">
            <SmileFace size={44} />
            <div>
              <strong>84k+</strong>
              <p className="text-default-500">Happy Patients</p>
            </div>
          </div>
          <div className="absolute top-1/3 z-20 -right-10 shadow-xl bg-primary-foreground p-4 flex justify-center items-center rounded-full">
            <HandWithHeart />
          </div>
        </div>
        <div>
          <Accordion className="border-none gap-4 flex flex-col">
            {faqList.map((faq, i) => {
              return (
                <AccordionItem
                  key={i + 1}
                  aria-label={faq.title}
                  title={faq.title}
                  indicator={<FaPlus fill="#2AA7FF" />}
                ></AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
