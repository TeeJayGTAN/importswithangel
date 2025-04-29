import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <header className="font-medium text-sm tracking-tighter w-full bg-black text-white flex justify-center py-4 items-center">Imports With Angel</header>
      <section className="px-4 hero w-full flex flex-col items-center ">
        <div className="headline font-bold mt-18 leading-12 text-4xl text-center w-full">Import from China like a pro</div>
        <div className="subheadline text-base pt-7 font-medium text-center w-full">Get insider knowledge on navigating China's complex market, finding reliable suppliers, and streamlining your import process to boost profits and growth.</div>
        <div className="video">
          <h3 className="bg-green-200 mt-5 mb-5 font-medium text-sm p-4 text-center rounded"> <span className="text-lg text-green-700">Step 1 of 2: </span>Watch This Video</h3>
          <video  className="rounded" loop controls>
            <source src="/vid.mp4" type="video/mp4"/>
          </video>
        </div>
        <button className="cta w-full mt-5 font-medium text-sm p-4 rounded bg-red-400"><span className="text-lg text-red-700">Step 2 of 2: </span>Click here to ENROLL NOW</button>
      </section>
      <section className="w-full mt-18 mb-18 px-4">
        <h3 className="font-bold leading-12 text-4xl text-center w-full capitalize">What you'll get in this course</h3>
        <h5 className="text-sm mt-7 text-center mb-8">You'll Learn All you need to know about importing from china, Identify Quality suppliers and spot fake vendors that will scam you. From placing orders from quality suppliers to shipping, you will be walked through the importation process step by step.</h5>
        <ul>
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Access to all course materials 24/7.</li>
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Study when it suits your schedule.</li>
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Engage with discussion forums and peer collaboration opportunities</li>
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Complete assignments and quizzes at your own pace.</li>
          <li className="flex justify-start items-center"><img className="w-[32px]" src="check-mark.png"/>Close Mentorship from me throughout your journey.</li>
        </ul>
      </section>
      <section className="mb-18 px-4 w-full flex flex-col items-center text-center testimonials bg-gray-100 py-18">
        <h3 className="font-bold leading-12 text-4xl text-center w-full capitalize">Client Testimonials</h3>
        <h5 className="text-sm mt-7 text-center mb-8">Here's what our customers from all over the world say about course</h5>
        <div className="btns flex items-center justify-center gap-4">
          <div className="left-arrow cursor-pointer opacity-40 border p-4 rounded-full"><img className="w-[32px]" src="/back.png" alt="" /></div>
          <div className="right-arrow cursor-pointer border p-4 opacity-80 rounded-full"><img className="w-[32px]" src="/next.png" alt="" /></div>
        </div>
        <div className="testimony mt-10 py-12 mx-auto w-full flex flex-col justify-center items-center bg-white rounded">
          <div className="profile-pic w-[286px] rounded">
            <img className="w-full overflow-hidden rounded" src="/woman.jpg" alt="profile pic" />
          </div>
          <div className="review-stars w-[80px]">
            <img className="w-full" src="/star.png" alt="" />
          </div>
          <div className="testimonial px-4">
            The course offered valuable insights and clear steps for success. The tips were easy to implement, and I've already noticed significant engagement improvements. One of the best courses!
          </div>
          <div className="testimonial-name mt-6 text-lg font-bold">Monica Davies</div>
          <div className="text-xs testimonial-role pt-2">- CEO Fashion Wears Store</div>
        </div>
      </section>

      <section className="w-full gap-10 flex flex-col justify-center items-center mb-18">
        <div className="counter flex flex-col gap-4 justify-center items-center w-full">
          <span className="count font-bold text-4xl">99%</span>
          <span className="count-caption font-black text-red-400 text-xs uppercase tracking-wide">happy students</span>
        </div>
        <div className="counter flex flex-col gap-4 justify-center items-center w-full">
          <span className="count font-bold text-4xl">300+</span>
          <span className="count-caption font-black text-red-400 text-xs uppercase tracking-wide">5 star reviews</span>
        </div>
        <div className="counter flex flex-col gap-4 justify-center items-center w-full">
          <span className="count font-bold text-4xl">100%</span>
          <span className="count-caption font-black text-red-400 text-xs uppercase tracking-wide">recommendations</span>
        </div>
        <div className="counter flex flex-col gap-4 justify-center items-center w-full">
          <span className="count font-bold text-4xl">500+</span>
          <span className="count-caption font-black text-red-400 text-xs uppercase tracking-wide">students</span>
        </div>
      </section>
      
      <section className="pricing mb-18 px-4 w-full flex flex-col items-center text-center testimonials bg-gray-100 py-18">
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
      </section>

      <section className="px-4 mb-18">
        <h3 className= "font-bold leading-12 text-4xl text-center w-full capitalize mb-12">Frequently Asked Questions</h3>
        <div className="questions-accordion mt-4">
          <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
            <span className="question-text font-bold text-base max-w-[80%]">Is this course delivered live or is it pre-recorded?</span>
            <span className="chevron-down w-[32px] block"><img className="w-full h-full object-contain" src="down.png" alt="pic" /></span>
          </div>
          <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
            <span className="question-text font-bold text-base max-w-[80%]">What is the course refund policy?</span>
            <span className="chevron-down w-[32px] block"><img className="w-full h-full object-contain" src="down.png" alt="pic" /></span>
          </div>
          <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
            <span className="question-text font-bold text-base max-w-[80%]">How long will I have access to the course materials?</span>
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
          </div>
        </div>
      </section>
      <footer className="px-4 mt-18 w-full p-3 bg-black text-white" >
        <div className="w-full flex justify-center gap-x-2 items-center">
        <span className="text-xs font-medium">2025</span>
          <span className="w-[20px] opacity-70"><img className="w-full object-contain" src="copyright.png" alt="" /></span>
          <span className="text-xs font-medium">All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
