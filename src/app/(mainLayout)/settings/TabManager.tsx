"use client";
import classNames from "classnames";
import { FaGear, FaReceipt, FaPaintbrush, FaBell } from "react-icons/fa6";
import { MdPrivacyTip } from "react-icons/md";
import { GiAerialSignal } from "react-icons/gi";
import styles from "@/styles/settings-styles/TabManager.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function TabManager({ children, isMobile }: { children: React.ReactNode; isMobile: boolean }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>(pathname.split("/")[2] || "general");
  const activeLinkClass: string = styles["tab-active"];
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };
  const router = useRouter();

  const listItems = [
    { item: "General", icon: <FaGear></FaGear>, link: "general" },
    { item: "Billing", icon: <FaReceipt></FaReceipt>, link: "billing" },
    { item: "Sessions", icon: <GiAerialSignal></GiAerialSignal>, link: "sessions" },
    { item: "Notification", icon: <FaBell></FaBell>, link: "notification" },
    { item: "Appearance", icon: <FaPaintbrush></FaPaintbrush>, link: "appearance" },
    { item: "Privacy & Security", icon: <MdPrivacyTip></MdPrivacyTip>, link: "privacy-security" },
  ];


  return (
    <div className="container-xxl mt-5 text-white mb-5">
      <div className="mx-3 mx-lg-0 px-lg-5">
        <h3>Settings</h3>
        {isMobile ? (
          <>
            {pathname === "/settings" ? (
                    <div  className={`list-group col-12 mb-3 mb-xxl-0`}>
                    {listItems.map((e, index) => (
                      <Link key={index} className={`text-start list-group-item  text-nowrap ${styles["mobile-view-tab"]}  `} href={`/settings/${e.link}`} onClick={() => handleTabChange(e.link)}>
                        {e.icon}&ensp;<span className="align-middle">{e.item}</span>
                      </Link>
                    ))}
                  </div>
            ) : (
              <div>
                {" "}
                <Button eventOnClick={() => router.push("/settings")} buttonColor={{ cssColor: "white" }} type="submit" width="auto" radius="10px" padding="10px">
                  <span style={{ color: "black" }}>Back</span>
                </Button>
                <div className=" overflow-visible">{children}</div>
              </div>
            )}
          </>
        ) : (
          <section className="mt-5 row justify-content-between">
            <div style={{ flex: "1 0 0" }} className={`list-group col-md-2 col-12 mb-3 mb-xxl-0`}>
              {listItems.map((e, index) => (
                <Link key={index} className={`text-start list-group-item ps-2 mb-1  text-nowrap ${styles["bg-color"]} ${styles["tab"]} ${classNames({ [activeLinkClass]: activeTab === e.link })}`} href={`/settings/${e.link}`} onClick={() => handleTabChange(e.link)}>
                  {e.icon}&ensp;<span className="align-middle">{e.item}</span>
                </Link>
              ))}
            </div>
            <div className="col-md-9 overflow-visible">{children}</div>
          </section>
        )}
      </div>
    </div>
  );
}
