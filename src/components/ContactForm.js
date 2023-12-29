import "./ContactFormStyles.css";

export default function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
