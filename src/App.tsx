import useForm from "./hooks/useForm";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
  terms: false,
};

function App() {
  /* The line `const { form, onChange } = useForm(INITIAL_FORM_STATE);` is using the custom hook
  `useForm` to initialize the form state and provide a function to handle changes to the form
  fields. */
  const { form, onChange } = useForm(INITIAL_FORM_STATE);

  return (
    <div className="container">
      <div className="box">
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={onChange} />
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="email" value={form.email} onChange={onChange} />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" value={form.message} rows={3} onChange={onChange} />
          </div>
          <div>
            <label>Terms</label>
            <input type="checkbox" name="terms" checked={form.terms} onChange={onChange} />
          </div>
        </form>
        <div className="result">
          <h3>Result</h3>
          <code lang="json">{JSON.stringify(form, null, 2)}</code>
        </div>
      </div>
    </div>
  );
}

export default App;
