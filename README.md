# Custom hook useForm

Hook personalizado en React para manejar el estado de cualquier formulario. Se acepta cualquier tipo de objeto, por lo que es muy útil en formularios grandes. Además de estar desarrollado en typescript que nos ayuda en el autocompletado.

> **NOTA**: No necesitas instalar ninguna dependencia adicional

# Uso

```js
const INITIAL_FORM = {name: "marlon-rt14"}

// Puedes pasarle a useForm cualquier objeto como parámetro
const { form, onChange, customOnChange, updateForm } = useForm(INITIAL_FORM);
```

# Propiedades

## form
Contiene un objeto con las mismas propiedades de INITIAL_FORM, y al comportarse como un estado, las propiedades del objeto se irán actualizando. 

A diferencia de INITIAL_FORM que es una variable constante y su valor no cambia. 

## onChange
La función onChange maneja los cambios de entrada tanto para casillas de verificación como para otros tipos de entrada en TypeScript. La función `onChange` toma como parámetro un evento `e`, que puede ser de tipo `ChangeEvent<HTMLInputElement>` o `SyntheticEvent`.

## updateForm
La función `updateForm` actualiza el estado del formulario fusionando el estado existente del formulario
con los nuevos datos del formulario.

El parámetro `form` de la función `updateForm` es de tipo `T`, lo que significa que puede ser de cualquier tipo especificado cuando se llama a la función. Representa los nuevos datos del formulario que con el `formState` existente.

## customOnChange
La función `customOnChange` actualiza el estado de un formulario con un nuevo valor para una clave específica.

El parámetro `value` en la función `customOnChange` representa el nuevo valor que será asignado a una clave específica en el objeto de estado del formulario.

El parámetro `key` de la función `customOnChange` representa la clave de la propiedad propiedad en el objeto `formState` que quieres actualizar con el nuevo `value`.

# Caso de uso
```ts
const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
  terms: false,
};

function App() {
  /* This line is using the custom hook `useForm` to initialize the form state and provide a function to handle changes to the form fields. */
  const { form, onChange } = useForm(INITIAL_FORM_STATE);

  return (
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
  );
}
```

