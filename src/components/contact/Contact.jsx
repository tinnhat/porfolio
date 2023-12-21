import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill, RiWhatsappFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.scss";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kiqaglp",
        "template_jo5q31k",
        form.current,
        "Oepg7Iovw8bQb9l6x"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email send successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>tinnhat0412@gmail.com</h5>
              <a href="mailto:tinnhat0412@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <RiMessengerFill className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Nhat Tin</h5>
              <a href="https://m.me/tin.nhat.12979" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <RiWhatsappFill className="contact__option-icon" />
              <h4>Phone</h4>
              <h5>0834667431</h5>
              <a href="tel:0834667431" target="_blank">
                Call me
              </a>
            </article>
          </div>
        </div>
      </section>
      
    </>
  );
}
