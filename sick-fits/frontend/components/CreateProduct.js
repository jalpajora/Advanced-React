import useForm from "../lib/useForm"
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: '',
    price: 3000,
    image: '',
    description: 'These is a description'
  });

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      console.log(inputs)
    }}>
      <fieldset aria-busy>
        <label htmlFor="image">
          Image
          <input 
            type="file" 
            id="image"
            name="image"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="name">
          Name
          <input 
            type="text" 
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input 
            type="number" 
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="number" 
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Product</button>
        {/* <button type="button" onClick={clearForm}>Clear Form</button>
        <button type="button" onClick={resetForm}>Reset Form</button> */}
      </fieldset>
    </Form>
  )
}
