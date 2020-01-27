import React from "react";

import formStyles from "./form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "-"
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className={formStyles.form}
        onSubmit={this.submitForm}
        action="https://formspree.io/mqkpyknd"
        method="POST"
      >
        <input className={formStyles.email} type="email" required={true} name="email" spellCheck={false} placeholder="yourname@example.com" />
        <textarea className={formStyles.message} type="text" required={true} name="message" spellCheck={false} placeholder="Write your message here!" />
        {
          status === "-"
            ?<button className={formStyles.button}>Submit</button>
            :status === "SUCCESS"
              ?<button className={formStyles.success}>Done!</button>
              :<button className={formStyles.error}>Error, click again to retry!</button>
        }
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Form;