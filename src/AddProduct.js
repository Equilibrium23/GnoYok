import { useForm, Controller } from "react-hook-form";
import { Input, Container, Button } from "@mui/material";

export default function AddProduct() {
  //{ category: "", title: "", description: "", adress: "", coords: "", owner: ""}
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
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="adress"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="owner"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );

}
