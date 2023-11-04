/* eslint-disable react/no-unescaped-entities */
import React from "react";
import careerImg from "@/assets/images/careerImg.png";
import Image from "next/image";
import whatisvernacular from "@/assets/images/whatisvernacular.png";
import whatisitliketoworkhere from "@/assets/images/whatisitliketoworkhere.png";
import whatarewe from "@/assets/images/whatarewe.png";
import worker1 from "@/assets/images/worker1.png";
import worker2 from "@/assets/images/worker2.png";

export default function Careers() {
  return (
    <>
      <section className="container text-white">
        <div className="d-flex pb-5">
          <div className="align-self-center">
            <h1>Democratize data with us</h1>
            <p>We&apos;re building the mobile industry&apos;s leading competitive intelligence platform. We can&apos;t do that without smart, inquisitive, and persistent individuals like yourself. If you are looking for a rewarding professional challenge that will help you grow as we grow, you&apos;re in the right place.</p>
          </div>
          <div>
            <Image src={careerImg} alt="Home page logo" width={600} height={500} quality={100} />
          </div>
        </div>
        <h1 className="text-center pt-5">Life At Vernacular</h1>
        <div className="row pb-5">
          <div className="d-flex justify-content-center pt-5">
            <Image src={whatisvernacular} alt="What is vernacular" width={150} height={150} quality={100} />
            <div className="col-7 ms-4">
              <h2>What is Vernacular</h2>
              <p>Vernacular is a B2B SaaS company that provides competitive intelligence services to Brands, App Developers, SDK Sales Teams, and Investors (Public and Private). The most successful companies in the world leverage our data, insights, and platform to inform their mobile strategy.</p>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <Image src={whatisitliketoworkhere} alt="What is it like to work here?" width={150} height={150} quality={100} />
            <div className="col-7 ms-4">
              <h2>What is it like to work here?</h2>
              <p>We&apos;re a scrappy bunch of collaborators. We understand that the business is successful when everyone feels like they are part of the same team and plays to win. That is why you&apos;ll have access to leadership, including the founders, every day to help you succeed.</p>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <Image src={whatarewe} alt="Our values" width={150} height={150} quality={100} />
            <div className="col-7 ms-4">
              <h2>Our values</h2>
              <p>We believe in fostering a culture where every team member is valued, and we work together to achieve success. Our core values include teamwork, continuous learning, and a dedication to providing top-notch competitive intelligence services. We're here to support you and help you thrive in a dynamic and fast-paced environment.</p>
            </div>
          </div>
        </div>
        <div className="py-5"></div>
        <div className="row py-5 mt-5 justify-content-center">
          <div className="col-5">
            <div className="card text-bg-light my-3 p-3">
            <Image className="mx-auto" style={{borderRadius:"9999px"}} src={worker1} alt="worker2" width={50} height={50} quality={100} />
            <div className="box">
              <div className="leader-divider"></div>
              </div>
              <div className="card-body">
                <p className="card-text">"I am surrounded by highly professional people who genuinely care about those they work with. They are always doing their best to provide help and experience to accomplish our goals."</p>
              </div>
            </div>
          </div>
          <div className="col-5" style={{ transform:"translate(-50px, -75px);"}} >
            <div className="card text-bg-light my-3 p-3">
                <Image className="mx-auto" style={{borderRadius:"9999px"}} src={worker2} alt="worker1" width={50} height={50} quality={100} />
                <div className="box">
              <div className="leader-divider"></div>
              </div>
              <div className="card-body">
                <p className="card-text">"As an inventor I know the phrase - "everything is already invented". As a developer at Vernacular, I continue to invent amazing things - and that is my favorite job."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}