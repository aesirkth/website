import React, { useState, useEffect } from "react";

import styles from "./style.css";
import clsx from "clsx";

export const Modal: React.FC<{ onClosed: () => void }> = props => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      let timeout = setTimeout(() => {
        props.onClosed();
      }, 200);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [open]);

  return (
    <section
      className={clsx(styles.modal, { [styles.modalOpen]: open })}
      onClick={() => setOpen(false)}
    >
      {props.children}
      <hr />
      <span className={styles.opener} onClick={() => setOpen(false)}>
        close
      </span>
    </section>
  );
};

export const FormSubmissionModal: React.FC<{ onClosed: () => void }> = props => {
  return (
    <Modal onClosed={props.onClosed}>
      We only use the information you enter to enable us to contact you and make a decision in which
      project you would be best suited in. The information will be removed upon request at{" "}
      <a href="mailto:contact@aesir.se">contact@aesir.se</a> or if you do not become a member of
      this association.
      <hr />
      Your data will be processed by the following third parties:
      <ul>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://policies.google.com/">
            Google
          </a>
          : We store your submission on Google Drive
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://www.netlify.com/gdpr/">
            Netlify
          </a>
          : The web service used to record your submission
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://zapier.com/privacy/">
            Zapier
          </a>
          : A service that takes your submission and stores it on Google Drive
        </li>
      </ul>
    </Modal>
  );
};

export const FormSubmissionTerms: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p className={styles.terms}>
        By submitting this form, you accept that we will store your data in accordance to the{" "}
        <span className={styles.opener} onClick={() => setOpen(true)}>
          terms
        </span>
        .
      </p>
      {open && <FormSubmissionModal onClosed={() => setOpen(false)} />}
    </>
  );
};
