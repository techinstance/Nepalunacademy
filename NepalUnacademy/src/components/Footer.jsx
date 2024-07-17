import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,faLinkedinIn, faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>COURSES</h3>
                <ul>
                    <li><a href="https://see.gov.np/">SEE (Secondary Education Examination)</a></li>
                    <li><a href="https://www.neb.gov.np/en/">NEB (National Examinations Board)</a></li>
                    <li><a href="https://cmsnepal.edu.np/course/mbbs-programme/">MBBS Entrance</a></li>
                    <li><a href="https://ncit.edu.np/courses">Engineering Entrance</a></li>
                    <li><a href="https://psc.gov.np/">Lok Sewa Aayog (Public Service Commission)</a></li>
                    <li><a href="https://www.icanc.org.np/course/ca">CA (Chartered Accountant)</a></li>
                    <li><a href="https://www.nbi.com.np/training-overview">Banking Courses</a></li>
                    <li><a href="https://www.ncttm.edu.np/courses/management">Management Courses</a></li>
                    <li><a href="https://www.nepalbarcouncil.org.np/law-entrance">Law Entrance</a></li>
                    <li><a href="https://nmcb.org.np/exams/nmcle">Medical Licensing Exam (NMCLE)</a></li>
                    <li><a href="https://www.moe.gov.np/scholarships">Scholarship Programs</a></li>
                    <li><a href="https://www.moe.gov.np/teacher-training">Teacher Training</a></li>
                    <li><a href="https://ctevt.org.np/technical-education">Technical Education</a></li>
                    <li><a href="https://ctevt.org.np/vocational-training">Vocational Training</a></li>
                    <li><a href="https://www.nast.gov.np/it-computer-science">IT and Computer Science</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>EXAMS</h3>
                <ul>
                    <li><a href="https://psc.gov.np/exams/lok-sewa-aayog">Lok Sewa Aayog (Public Service Commission) Exams</a></li>
                    <li><a href="https://see.gov.np/exams/see">SEE (Secondary Education Examination)</a></li>
                    <li><a href="https://www.neb.gov.np/en/exams/neb">NEB (National Examinations Board) Exam</a></li>
                    <li><a href="https://cmsnepal.edu.np/course/mbbs-entrance">MBBS Entrance Exam</a></li>
                    <li><a href="https://ncit.edu.np/exams/engineering-entrance">Engineering Entrance Exam</a></li>
                    <li><a href="https://www.icanc.org.np/exams/ca">CA (Chartered Accountant) Exams</a></li>
                    <li><a href="https://www.nbi.com.np/exams/banking">Banking Exams</a></li>
                    <li><a href="https://www.tsc.gov.np/exams/teachers-service-commission">Teachers Service Commission Exam</a></li>
                    <li><a href="https://www.icsanepal.edu.np/exams/chartered-secretary">Chartered Secretary Exams</a></li>
                    <li><a href="https://www.nepalbarcouncil.org.np/exams/legal">Legal Exams (Bar Council)</a></li>
                    <li><a href="https://nmcb.org.np/exams/nmcle">Medical Licensing Exam (NMCLE)</a></li>
                    <li><a href="https://www.moe.gov.np/exams/scholarship">Scholarship Exams</a></li>
                    <li><a href="https://www.moe.gov.np/education-news">Education News</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>EXAM PREPARATION</h3>
                <ul>
                    <li><a href="https://see.gov.np/prep/free-see-prep">Free SEE Prep</a></li>
                    <li><a href="https://www.neb.gov.np/en/prep/free-neb-prep">Free NEB Prep</a></li>
                    <li><a href="https://www.exam.com/prep/maths">Maths</a></li>
                    <li><a href="https://www.exam.com/prep/physics">Physics</a></li>
                    <li><a href="https://www.exam.com/prep/chemistry">Chemistry</a></li>
                    <li><a href="https://www.exam.com/prep/biology">Biology</a></li>
                    <li><a href="https://www.exam.com/prep/engineering-entrance-2024">Engineering Entrance 2024</a></li>
                    <li><a href="https://www.exam.com/prep/engineering-2023-question-paper-answers">Engineering Entrance 2023 Question Paper with Answers</a></li>
                    <li><a href="https://www.exam.com/prep/engineering-mock-test">Engineering Mock Test</a></li>
                    <li><a href="https://www.exam.com/prep/engineering-2024-question-papers-answers">Engineering 2024 Question Papers with Answers</a></li>
                    <li><a href="https://www.exam.com/prep/engineering-2023-question-papers-answers">Engineering 2023 Question Papers with Answers</a></li>
                    <li><a href="https://www.exam.com/prep/engineering-2022-question-paper-answers">Engineering 2022 Question Paper with Answers</a></li>
                    <li><a href="https://www.exam.com/prep/mbbs-2023-question-paper">MBBS Entrance 2023 Question Paper</a></li>
                    <li><a href="https://www.exam.com/prep/mbbs-2023-question-paper-analysis">MBBS Entrance 2023 Question Paper Analysis</a></li>
                    <li><a href="https://www.exam.com/prep/mbbs-2022-answer-key">MBBS Entrance 2022 Answer Key</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>COMPANY </h3>
                <ul>
                    <li><a href="/company/about-us">About Us</a></li>
                    <li><a href="/company/contact-us">Contact Us</a></li>
                    <li><a href="/company/investors">Investors</a></li>
                    <li><a href="/company/compliance">Compliance</a></li>
                    <li><a href="/company/careers">Careers</a></li>
                    <li><a href="/company/media">Nepal Unacademy in Media</a></li>
                    <li><a href="/company/social-initiative">Social Initiative - Education for All</a></li>
                    <li><a href="/company/faq">FAQ</a></li>
                    <li><a href="/company/student-stories">Student Stories - The Learning Tree</a></li>
                    <li><a href="/company/support">Support</a></li>
                    <li><a href="/company/blog">Blog</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>FREE TEXTBOOK SOLUTIONS</h3>
                <ul>
                    <li><a href="https://moecdc.gov.np/moecdc/public/en/text-books">CDC Textbook</a></li>
                    <li><a href="/solutions/cdc-exemplar">CDC Exemplar</a></li>
                    <li><a href="https://moecdc.gov.np/storage/gallery/1708925838.pdf">CDC for Class 6</a></li>
                    <li><a href="https://moecdc.gov.np/storage/gallery/1709112299.pdf">CDC for Class 7</a></li>
                    <li><a href="https://moecdc.gov.np/storage/gallery/1692693895.pdf">CDC for Class 8</a></li>
                    <li><a href="https://moecdc.gov.np/storage/gallery/1708861009.pdf">CDC for Class 9</a></li>
                    <li><a href="https://moecdc.gov.np/storage/gallery/1687066510.pdf">CDC for Class 10</a></li>
                    <li><a href="/solutions/class-11">CDC Solutions for Class 11</a></li>
                    <li><a href="https://moecdc.gov.np/storage/gallery/1673318499.pdf">CDC for Class 11 English</a></li>
                    <li><a href="https://moecdc.gov.np/moecdc/public/storage/gallery/1673319459.pdf">CDC for Class 12 English</a></li>
                    <li><a href="/solutions/class-12">CDC Solutions for Class 12</a></li>
                    <li><a href="https://dhanpatrai.com/rdsharma/books/desktop/Math-X/Start.php">RD Sharma Solutions</a></li>
                    <li><a href="https://dhanpatrai.com/rdsharma/books/desktop/Math-X/Start.php">RD Sharma Class 10 Solutions</a></li>
                    <li><a href="https://www.scribd.com/document/417743675/Economics-XI-XII-HSEB-pdf">HSEB Solutions</a></li>
                </ul>hrllo
            </div>
            <div className="footer-column follow-us">
                <h3>FOLLOW US</h3>
                <div className="social-icons">
                    <a href="https://www.facebook.com/nepal_unacademy/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/nepal_unacademy/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}  alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/nepal_unacademy/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} alt="LinkedIn" />
                    </a>
                      <a href="https://chat.whatsapp.com/HIFJEwZXE4cI8thSqdDM3O" className="whatsapp">
                          <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="https://telegram.org" className="telegram">
                             <FontAwesomeIcon icon={faTelegramPlane} />
                           </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
