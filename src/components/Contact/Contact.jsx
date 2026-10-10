import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-titre">
      <div className="container">
        <div className="contact__card">
          <p className="section-label">04 — Contact</p>

          <h2 className="section-title contact__title" id="contact-titre">
            Une question, une opportunité ?
          </h2>

          <p className="contact__text">
            Écrivez-moi, ou retrouvez-moi sur GitHub et LinkedIn.
          </p>

          <div className="contact__actions">
            <a className="btn btn--primary" href="mailto:labrosse.anthony.dev@gmail.com">
              labrosse.anthony.dev@gmail.com
            </a>
            <a
              className="btn btn--outline"
              href="https://www.linkedin.com/in/antonyla/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (nouvel onglet)"
            >
              LinkedIn
            </a>
            <a
              className="btn btn--outline"
              href="https://github.com/Labrosse-Anthony"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (nouvel onglet)"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;