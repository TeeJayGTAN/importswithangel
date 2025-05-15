"use client";

import Image from "next/image";
import FaqPill from "./components/faqpill";

import ReactPlayer from "react-player";
import Script from "next/script";

export default function Home() {
  const faqs: { question: string; answer: string }[] = [
    {
      question: "Will I be scammed if i try this?",
      answer:
        'Nope. I give you verified agents, walk you through each step, and you"ll even see live orders being placed',
    },
    {
      question:
        'I"ve never done anything like this before. Is it beginner-friendly?',
      answer:
        "YES. This is made for complete beginners --- no prior experience needed.",
    },
    {
      question: "When will I get access?",
      answer:
        'As soon as you pay, you"ll be added to the class group and get instant access.',
    },
  ];
  const testimonials: { name: string; title: string; url: string }[] = [
    {
      name: "Precious",
      title: "CEO - PreshyWears",
      url: "/R1.jpg",
    },
    {
      name: "Tunde",
      title: "CEO - Tunez Trendz",
      url: "/R2.jpg",
    },
    {
      name: "Joy",
      title: "",
      url: "/R3.jpg",
    },
    {
      name: "Emeka",
      title: "",
      url: "/R4.jpg",
    },
    {
      name: "Zainab",
      title: "CEO - Zain Online Store",
      url: "/R5.jpg",
    },
    {
      name: "Chinedu",
      title: "",
      url: "/R6.jpg",
    },
    {
      name: "Mariam",
      title: "",
      url: "/R7.jpg",
    },
    {
      name: "Samuel",
      title: "CEO - SamX Importz",
      url: "/R8.jpg",
    },
    {
      name: "Vivian",
      title: "",
      url: "/R9.jpg",
    },
    {
      name: "Abdul",
      title: "",
      url: "/R10.jpg",
    },
  ];
  return (
    <div className="w-full">
      <Script src="https://embed.tawk.to/68252cc4e6bf69190cdb2ee1/1ir8jdo0c"/>
      <header className="font-medium text-sm tracking-tighter w-full bg-black text-white flex justify-center py-4 items-center">
        Imports With Angel
      </header>
      <section className="px-4 hero w-full flex flex-col items-center ">
        <div className="headline font-bold mt-18 leading-12 text-4xl text-center w-full">
          Learn How to Import Products from China Without Getting Scammed — Even
          If You’re a Total Beginner
        </div>
        <div className="subheadline text-base pt-7 font-medium text-center w-full">
          {" "}
          Join 1,500+ Nigerians making 2x–5x profit reselling products they
          import directly from China. ₦3,000 Promo Ends in 5 Days! (Then the
          price goes back to ₦10,000).
        </div>
        <div className="video flex flex-col gap-y-8 mt-7 justify-center items-center w-full">
          <h3 className="bg-green-200 mt-5 mb-5 font-medium text-sm p-4 text-center rounded">
            {" "}
            <span className="text-lg text-green-700">Step 1 of 2: </span>Watch
            This Video
          </h3>
            <div className="shadow w-[55%] rounded-[15px] min-h-fit overflow-hidden flex justify-center items-center">
              <ReactPlayer
                url="https://vimeo.com/1084451517/5f20b51a58?share=copy"
                controls
                playing
                loop
                // wrapper='div'
                muted={true}
                className=" w-full h-full"
              />
            </div>
        </div>
        <button className="cta w-[50%] mt-10 font-medium text-sm p-4 rounded bg-red-400">
          <span className="text-lg text-red-700">Step 2 of 2: </span>
          <br />
          Click here to Join the Class Now — Only ₦3,000
        </button>
        {/* put timer component here */}
      </section>
      <section className="px-4 hero w-full flex flex-col items-center my-18">
        {/* pain and promise section */}
        <div className="font-bold leading-12 text-4xl text-center w-full capitalize mb-12">
          Struggling to find a real side hustle that works in Nigeria?
        </div>
        <ul className="flex flex-col justify-center items-start gap-y-5">
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[24px]" src="bulletpoint.png" />
            Are you tired of buying from Nigerian vendors and making tiny
            profits?.
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[24px]" src="bulletpoint.png" />
            Are you scared of losing money to scammers in China?
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[24px]" src="bulletpoint.png" />
            Confused about shipping, agents, and product sourcing?
          </li>
        </ul>
        <h5 className="text-sm mt-7 text-center mb-8">
          This class is for you. In just 5 days, I’ll show you how to:
        </h5>
        <ul className="flex flex-col justify-center items-start gap-y-5">
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[24px]" src="bulletpoint.png" />
            Import products safely from China (without travel or scams)
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[24px]" src="bulletpoint.png" />
            Get direct access to trusted agents & suppliers
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[24px]" src="bulletpoint.png" />
            Start with as little as ₦50k and scale fast
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[24px]" src="bulletpoint.png" />
            Resell and make 200%+ profit like my other students
          </li>
        </ul>
        <button className="cta w-[50%] mt-10 font-medium text-sm p-4 rounded bg-red-400">
          Click here to Join the Class Now — Only ₦3,000
        </button>
      </section>
      <section className="mb-18 px-4 w-full flex flex-col items-center text-center testimonials bg-gray-100 py-18">
        <h3 className="font-bold leading-12 text-4xl text-center w-full capitalize">
          Real Results. Real People.
        </h3>
        <h5 className="text-sm mt-7 text-center mb-8">
          Don’t take my word for it — here’s what past students are saying.
        </h5>
        {/* <div className="btns flex items-center justify-center gap-4">
          <div className="left-arrow cursor-pointer opacity-40 border p-4 rounded-full"><img className="w-[32px]" src="/back.png" alt="" /></div>
          <div className="right-arrow cursor-pointer border p-4 opacity-80 rounded-full"><img className="w-[32px]" src="/next.png" alt="" /></div>
        </div> */}
        <div className="testimony-grid grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimony mt-10 py-12 mx-auto w-full flex flex-col gap-y-4 justify-center items-center bg-white rounded"
            >
              <div className="profile-pic w-[286px] rounded">
                <img
                  className="w-full overflow-hidden rounded"
                  src={item.url}
                  alt="testimony pic"
                />
              </div>
              {/* <div className="review-stars w-[80px]">
                  <img className="w-full" src="/star.png" alt="" />
                </div> */}
              {/* <div className="testimonial px-4">
                  The course offered valuable insights and clear steps for success. The tips were easy to implement, and I've already noticed significant engagement improvements. One of the best courses!
                </div> */}
              <div className="testimonial-name mt-6 text-lg font-bold">
                {item.name}
              </div>
              <div className="text-xs testimonial-role pt-2">{item.title}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full mt-18 mb-18 px-4">
        <h3 className="font-bold leading-12 text-4xl text-center w-full capitalize">
          What you'll learn in this class
        </h3>
        <h5 className="text-sm mt-7 text-center mb-8">
          Inside the Importation Masterclass, You’ll Discover:
        </h5>
        <ul className="flex flex-col justify-center items-start gap-y-5">
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            How to find trusted China suppliers.
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            How to calculate total cost (products, shipping, clearing).
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            How to talk to agents (with a template).
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            Products to AVOID so you don’t lose money.
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            20 HOT-SELLING items Nigerians buy like crazy.
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            How to receive your items safely.
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            BONUS: Access to my 3 trusted agents & 2 product sourcing plug-ins.
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            BONUS: My personal supplier list.
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            BONUS: Agent contact script (no begging or fear).
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            BONUS: Live Zoom call access for Q&A.
          </li>
          <li className="flex justify-start items-center gap-x-4">
            <img className="w-[32px]" src="check-mark.png" />
            BONUS: Certificate of Completion.
          </li>
        </ul>

        <h5 className="text-sm mt-7 text-center mb-8">
          All for just ₦3,000(for a limited time) After 5 days, the price goes
          back to ₦10,000
        </h5>
        {/* TIMER COMPONENET HERE */}
        <div className="cont w-full flex justify-center">
          <button className="cta w-[50%] mt-10 font-medium text-sm p-4 rounded bg-red-400">
            Click here to Join the Class Now — Only ₦3,000
          </button>
        </div>
      </section>

      <section className="w-full gap-10 flex flex-col justify-center items-center mb-18">
        <div className="counter flex flex-col gap-4 justify-center items-center w-full">
          <span className="count font-bold text-4xl">99%</span>
          <span className="count-caption font-black text-red-400 text-xs uppercase tracking-wide">
            happy students
          </span>
        </div>
        <div className="counter flex flex-col gap-4 justify-center items-center w-full">
          <span className="count font-bold text-4xl">1200+</span>
          <span className="count-caption font-black text-red-400 text-xs uppercase tracking-wide">
            5 star reviews
          </span>
        </div>
        <div className="counter flex flex-col gap-4 justify-center items-center w-full">
          <span className="count font-bold text-4xl">100%</span>
          <span className="count-caption font-black text-red-400 text-xs uppercase tracking-wide">
            recommendations
          </span>
        </div>
        <div className="counter flex flex-col gap-4 justify-center items-center w-full">
          <span className="count font-bold text-4xl">1,500+</span>
          <span className="count-caption font-black text-red-400 text-xs uppercase tracking-wide">
            students
          </span>
        </div>
      </section>

      {/* <section className="pricing mb-18 px-4 w-full flex flex-col items-center text-center testimonials bg-gray-100 py-18">
        <h3 className="font-bold leading-12 text-4xl text-center w-full capitalize">Enroll Now</h3>
        <div className="pricing-plan-pill gap-6 px-4 mt-10 py-12 mx-auto w-full flex flex-col justify-center items-center bg-white rounded">
          <h5 className="text-[#3a3a3a] text-2xl font-bold text-left self-start">Get Started</h5>
          <h6 className="self-start text-left text-sm leading-relaxed ">What are you waiting for click on the Enroll Now! button to begin your journey to easy importation from China.</h6>
          <ul className="self-start text-left text-sm leading-relaxed flex flex-col gap-2">
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Access to all course materials 24/7.</li>
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Study when it suits your schedule.</li>
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Engage with discussion forums and peer collaboration opportunities</li>
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Complete assignments and quizzes at your own pace.</li>
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Close Mentorship from me throughout your journey.</li>
        </ul>
        <div className="price mt-6 flex gap-2 items-center justify-center">
          <span className="former line-through text-lg opacity-60 font-bold">N10,000</span>
          <span className="discount text-4xl font-bold">N3,000</span>
        </div>
        <button className="bg-red-400 mt-2 p-4 rounded ">ENROLL NOW</button>
        </div>
      </section> */}

      <section className="px-4 mb-18">
        <h3 className="font-bold leading-12 text-4xl text-center w-full capitalize mb-12">
          Frequently Asked Questions
        </h3>
        <div className="questions-accordion mt-4">
          {faqs.map((faqpill, index) => (
            <FaqPill
              key={index}
              question={faqpill.question}
              answer={faqpill.answer}
            />
          ))}
          {/* <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
            <span className="question-text font-bold text-base max-w-[80%]">Will I be scammed if I try this??</span>
            <span className="chevron-down w-[32px] block"><img className="w-full h-full object-contain" src="down.png" alt="pic" /></span>
          </div>
          <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
            <span className="question-text font-bold text-base max-w-[80%]">I’ve never done anything like this before. Is it beginner-friendly?</span>
            <span className="chevron-down w-[32px] block"><img className="w-full h-full object-contain" src="down.png" alt="pic" /></span>
          </div>
          <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
            <span className="question-text font-bold text-base max-w-[80%]">When will I get access?</span>
            <span className="chevron-down w-[32px] block"><img className="w-full h-full object-contain" src="down.png" alt="pic" /></span>
          </div>
          <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
            <span className="question-text font-bold text-base max-w-[80%]">Do I need any special equipment, or prior knowledge on any subject for this course</span>
            <span className="chevron-down w-[32px] block"><img className="w-full h-full object-contain" src="down.png" alt="pic" /></span>
          </div>
          <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
            <span className="question-text font-bold text-base max-w-[80%]">Are there discounts for this course?</span>
            <span className="chevron-down w-[32px] block"><img className="w-full h-full object-contain" src="down.png" alt="pic" /></span>
          </div>
          <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
            <span className="question-text font-bold text-base max-w-[80%]">Will this course be suitable and helpful for me?</span>
            <span className="chevron-down w-[32px] block"><img className="w-full h-full object-contain" src="down.png" alt="pic" /></span>
          </div> */}
        </div>
      </section>
      <section className="px-4 mb-18 w-full">
        <h3 className="font-bold leading-12 text-4xl text-center w-full capitalize mb-12">
          Join 1,500+ Others Who’ve Learned to Import With Just ₦3,000.
        </h3>
        <h5 className="text-sm mt-7 text-center mb-8">
          Don’t miss out. This knowledge could change your income forever.
        </h5>
        <button className="cta w-[45%] block mx-auto mt-5 font-medium text-sm p-4 rounded bg-red-400">
          Click here to Join the Class Now — Only ₦3,000
        </button>
      </section>

      <section className=" px-4 w-full flex flex-col items-center text-center testimonials bg-gray-100 py-18">
        <h3 className="font-bold leading-12 text-4xl text-center w-full capitalize">
          WHO IS ANGEL?
        </h3>
        <h5 className="text-sm mt-7 text-center mb-8">
          Hi, I’m Angel, a full-time importer and trainer. I’ve helped over
          1,500 Nigerians learn to import from China the RIGHT way — without
          stress or scams. Now it’s your turn!.
        </h5>
        <div className="profile-pic w-[286px] rounded">
          <img
            className="w-full overflow-hidden rounded"
            src="/angel.jpeg"
            alt="angel pic"
          />
        </div>
      </section>
      <footer className="px-4 w-full p-3 bg-black text-white">
        <div className="w-full flex justify-center gap-x-2 items-center">
          <span className="text-xs font-medium">2025</span>
          <span className="w-[20px] opacity-70">
            <img className="w-full object-contain" src="copyright.png" alt="" />
          </span>
          <span className="text-xs font-medium">All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
