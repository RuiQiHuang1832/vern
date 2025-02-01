import styles from "@/styles/home-styles/MembershipOptions.module.css";
import Button from "@/components/Button";
import { membershipData } from "@/global/homeData";
import pricingLogo from "@/assets/images/home/pricing-logos.png"
import Image from "next/image";

export default function MembershipOptions() {


  return (
    <section  style={{ padding: "0rem 4rem 0 4rem", background:"#121212" }}>
<div className={`${styles["wave"]}`}></div>
      <div  className="container col-8 text-center">
      <h6 style={{letterSpacing:"1.5px", textTransform:"uppercase", fontWeight:"500", fontFamily:"monospace"}}>Plans & Pricing</h6>

      <h1 className="my-4">plans that fit your needs. <span style={{backgroundColor:"yellow",color:"black"}}>no surprises.</span></h1>
      <p className="fs-5 secondary fw-light">Don’t overthink it! Every option is backed by our 30-day money-<br></br>back guarantee. We&apos;ll make sure you find the perfect fit!</p>
      <Image src={pricingLogo.src} alt="pricing logo" width={0} height={0} sizes="100vw" style={{ height: "auto", width:"100%"}} priority={true} quality={100} className="my-5"/>
      </div>
      <div style={{ gap: "2rem" }} className="mt-5 d-flex">
        {membershipData.map((e, i) => (
          <div  key={i} className="p-5 fw-light focus-ring ring-blue" style={{ borderRadius: "24px", flex: "1", backgroundColor: "#1A1A1A", }}>
            <div className="d-flex justify-content-between align-items-center">
              <div style={{fontSize:'40px', fontWeight:"400"}}>{e.plan}</div>  
             <div><Image priority src={e.src} width={70} height={70} alt={"icon"} ></Image>
             </div>
            </div>
            <p className="secondary">{e.description}</p>
            <h3>{e.price}{i !== 2 && <small style={{color:"#848484"}}>/month</small>}</h3>
            <div className="py-3">
              <Button buttonColor={{ cssColor: "black" }} type="submit" width="100%" radius="10px" padding="13px" styleClass={``}>
                {e.type}
              </Button>
            </div>
            {i > 0 && (
              <div className="mt-3">
                Everything in <strong>{membershipData[i - 1].plan}</strong>, plus:
              </div>
            )}
            <ul className="mt-3" style={{ paddingLeft: "1rem" }}>
              {e.features.map((feature, i) => (
                <li style={{ transform: "translateX(2px)" }} className={styles["marker"]} key={i}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
