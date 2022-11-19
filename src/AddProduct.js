import { useForm, Controller } from "react-hook-form";
import { InputLabel, Input, Container, Button } from "@mui/material";

export default function AddProduct() {
  
  const { handleSubmit, control } = useForm({
    defaultValues: {
      category: '',
      title: '',
      description: '',
      adress: '',
      owner: ''
    }
  });

  const onSubmit = data => console.log(data);

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="category-input">Category</InputLabel>
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input id="category-input" aria-describedby="category-input-text" {...field} />}
        />

        <InputLabel htmlFor="title-input">Title</InputLabel>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input id="title-input" aria-describedby="title-input-text" {...field} />}
        />

        <InputLabel htmlFor="adress-input">Address</InputLabel>
        <Controller
          name="adress"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input id="adress-input" aria-describedby="adress-input-text"{...field} />}
        />

        <InputLabel htmlFor="owner-input">Owner</InputLabel>
        <Controller
          name="owner"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input id="owner-input" aria-describedby="owner-input-text"{...field} />}
        />

        <InputLabel htmlFor="description-input">Description</InputLabel>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input id="description-input" multiline="true" aria-describedby="description-input-text" {...field} />}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );

}
