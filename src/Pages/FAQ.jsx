
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [

    {
        category: "General",
        questions: [
            {
                q: "What is E-Procurement System?",
                a: "eProcurement System is a process of procuring the items electronically using the internet. This facility drastically reduces the tendering cycle time, cuts indirect costs, and enhances transparency in procurement.",
            },
            {
                q: "What are the requirements of the client machine to access the e-Procurement site?",
                a: (
                    <div>
                        To access the eProcurement system, you need:
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Computer system with Pentium IV or above</li>
                            <li>Internet connection (preferably dedicated for smooth operation)</li>
                            <li>Java-enabled browser (Mozilla Firefox / Chrome / Internet Explorer)</li>
                            <li>Digital Signature Certificate (DSC) driver installed (provided by DSC provider)</li>
                            <li>Java Runtime Environment (JRE) installed – can be downloaded from portal</li>
                            <li>Administrator privileges to install DSC drivers and JRE</li>
                        </ul>
                    </div>
                ),
            },
            {
                q: "Can I access my eProcurement Account from a different client system?",
                a: "Yes, you can access your account from anywhere in the world, provided the system has the required configuration (as in point 2). You also need to carry your DSC with you.",
            },
            {
                q: "What is the default Date and Time format used in the System?",
                a: "The default date time format is Indian Standard Time (IST), which is (GMT +5:30). The format used is DD–Mon–YYYY HH:Mi AM/PM. This standard convention is followed in all the pages.",
            },
            {
                q: "What are the basic features available in this Procurement Portal as a general user?",
                a: "Users can view tenders hosted on the portal, download tender schedules free of cost, and use links like 'Tenders by Closing Date' to see tenders closing soon. Corrigendum links are also available for amendments. The portal allows searching tenders by value, date, department, category, etc.",
            },
            {
                q: "Should I have any Anti Virus software in my client system?",
                a: "Yes, it is advised to install and keep an updated antivirus. Bids with virus-infected files are likely to be rejected by the eProcurement Portal.",
            },
            {
                q: "Many documents have to be uploaded as PDF documents. Sometimes, it is seen that Autocad drawings are required to be uploaded. Can I have some software for creating/viewing these documents?",
                a: "Yes. Links for required software are given in the Downloads section of the portal. Most are open-source (no license needed) like Open Office, Adobe Reader, PDF Creator, DWF Viewer, etc.",
            },
            {
                q: "I have uploaded the documents after digitally signing all the documents. Should I submit paper documents ink signed and submit to the TIA office?",
                a: "As per the IT ACT 2000, digitally signed documents are valid for all legal purposes. Physical documents are not needed unless specifically requested for cross-checking. In case of offline payment instruments, physical documents must be submitted before bid opening.",
            },
            {
                q: "Whether Can I Upload BoQ with Currencies other than Indian Rupees?",
                a: "No, the system allows uploading BoQ only in Indian Rupees. Other currencies are not permitted.",
            },
        ],
    },

    {
        category: "Online Enrolment",
        questions: [
            {
                q: "How do I get enrolled in the eProcurement Portal?",
                a: "Online enrolment for eProcurement is very simple as a bidder. Go to Tenders Home Page, click on 'Online Bidder Enrollment' link and fill up the registration form online. On successful submission, the registered login id can be used to login. Then login again and map your Digital Signature Certificate (Class 3 DSC with only Signing Certificate) with your account, which completes the online enrolment process.",
            },
            {
                q: "How much does it cost to enroll online?",
                a: "Cost of Enrollment and renewal depends on the Government Order (GO) prevailing at that period of time.",
            },
            {
                q: "If I am enrolled online, how long my enrollment is valid?",
                a: "The Registration and Renewal is normally done for a period of one year from the date of registration and can be subsequently renewed. If renewal is approved before expiry, renewal charge applies, otherwise it is treated as a new registration. Also, if your DSC expires, you must renew your DSC from the Certifying Authority and re-enroll the DSC.",
            },
            {
                q: "How do I log on to eProcurement system after I have enrolled online?",
                a: "After registering, you can login using your User ID, Password, and Digital Signature Certificate on the portal.",
            },
            {
                q: "Is it possible to edit my profile details entered during online enrollment?",
                a: "Yes, after logging in, on the Dashboard you may edit your details by clicking 'Edit Profile'. Almost all information except your login ID can be changed.",
            },
        ],
    },
    {
        category: "Password",
        questions: [
            {
                q: "I have lost my password. How can I retrieve it?",
                a: "You can click on 'Forgot Password' and the new password will be sent to you by mail, to the alternate email id mentioned in your profile.",
            },
            {
                q: "How do I change my password?",
                a: "After logging into your account, you will find a link to 'Change Password' in your dashboard.",
            },
            {
                q: "Is the password secured?",
                a: "Password is encrypted at the database level. It is known only to you. Even the System Administrator does not know your password. As a part of the security policy, we advise you to change the password at regular intervals.",
            },
        ],
    },
    {
        category: "Tender Related",
        questions: [
            {
                q: "I have lost my password. How can I retrieve it?",
                a: "You can click on 'Forgot Password' and the new password will be sent to you by mail, to the alternate email id mentioned in your profile.",
            },
            {
                q: "How do I change my password?",
                a: "After logging into your account, you will find a link to 'Change Password' in your dashboard.",
            },
            {
                q: "Is the password secured?",
                a: "Password is encrypted at the database level. It is known only to you. Even the System Administrator does not know your password. As a part of the security policy, we advise you to change the password at regular intervals.",
            },
        ],
    },
    {
        category: "Security Related",
        questions: [
            {
                q: "I have lost my password. How can I retrieve it?",
                a: "You can click on 'Forgot Password' and the new password will be sent to you by mail, to the alternate email id mentioned in your profile.",
            },
            {
                q: "How do I change my password?",
                a: "After logging into your account, you will find a link to 'Change Password' in your dashboard.",
            },
            {
                q: "Is the password secured?",
                a: "Password is encrypted at the database level. It is known only to you. Even the System Administrator does not know your password. As a part of the security policy, we advise you to change the password at regular intervals.",
            },
        ],
    },
    {
        category: "Bid Openers Related",
        questions: [
            {
                q: "I have lost my password. How can I retrieve it?",
                a: "You can click on 'Forgot Password' and the new password will be sent to you by mail, to the alternate email id mentioned in your profile.",
            },
            {
                q: "How do I change my password?",
                a: "After logging into your account, you will find a link to 'Change Password' in your dashboard.",
            },
            {
                q: "Is the password secured?",
                a: "Password is encrypted at the database level. It is known only to you. Even the System Administrator does not know your password. As a part of the security policy, we advise you to change the password at regular intervals.",
            },
        ],
    },
    {
        category: "Mobile App Related",
        questions: [
            {
                q: "I have lost my password. How can I retrieve it?",
                a: "You can click on 'Forgot Password' and the new password will be sent to you by mail, to the alternate email id mentioned in your profile.",
            },
            {
                q: "How do I change my password?",
                a: "After logging into your account, you will find a link to 'Change Password' in your dashboard.",
            },
            {
                q: "Is the password secured?",
                a: "Password is encrypted at the database level. It is known only to you. Even the System Administrator does not know your password. As a part of the security policy, we advise you to change the password at regular intervals.",
            },
        ],
    },


];

function FAQ() {
    const [openCategory, setOpenCategory] = useState(null);
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
        setOpenQuestion(null);
    };

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-black text-white py-10 px-6">
            <h1 className="text-center text-3xl font-bold my-12 text-red-500">
                Welcome to Frequently Asked Questions (FAQ)
            </h1>

            <div className="max-w-6xl mx-auto space-y-6">
                {faqData.map((faq, i) => (
                    <div
                        key={i}
                        className="rounded-lg shadow-md overflow-hidden border border-[#373737]"
                    >
                        {/* Category Header */}
                        <button
                            onClick={() => toggleCategory(i)}
                            className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold 
              bg-gradient-to-r from-[#202020] to-[#272727] 
              rounded-lg shadow-lg border border-[#373737] 
              hover:from-[#2c2c2c] hover:to-[#3a3a3a] transition"
                        >
                            {faq.category}
                            {openCategory === i ? (
                                <FaMinus
                                    className="text-black bg-red-500 rounded-full p-1"
                                    size={24}
                                />
                            ) : (
                                <FaPlus
                                    className="text-red-500 bg-black rounded-full p-1"
                                    size={24}
                                />
                            )}
                        </button>

                        {/* Questions List */}
                        {openCategory === i && (
                            <div className="bg-[#1c1c1c]">
                                {faq.questions.map((item, j) => (
                                    <div
                                        key={j}
                                        className="border-t border-[#373737]"
                                    >

                                        <button
                                            onClick={() => toggleQuestion(j)}
                                            className="w-full flex justify-between items-center px-6 py-3 text-base font-medium 
  bg-gradient-to-r from-[#202020] to-[#272727] 
  rounded-lg shadow-md border border-[#373737] 
  hover:from-[#2c2c2c] hover:to-[#3a3a3a] transition"
                                        >
                                            {/* Numbering + Question */}
                                            <span className="flex items-start gap-2 text-left">
                                                <span className="text-red-500 font-bold">{j + 1}.</span>
                                                <span className="block">{item.q}</span>
                                            </span>
                                            {openQuestion === j ? (
                                                <FaMinus
                                                    className="text-black bg-red-500 rounded-full p-1"
                                                    size={20}
                                                />
                                            ) : (
                                                <FaPlus
                                                    className="text-red-500 bg-black rounded-full p-1"
                                                    size={20}
                                                />
                                            )}
                                        </button>

                                        {openQuestion === j && (
                                            <div className="px-6 py-4 text-sm text-gray-300 bg-[#111] leading-relaxed">
                                                {item.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
