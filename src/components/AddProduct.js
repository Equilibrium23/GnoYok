import { useForm, Controller } from "react-hook-form";
import { InputLabel, Input, Button, FormControl, Stack, Autocomplete, TextField } from "@mui/material";
import { getCoordinates } from "../thirdparty/positionstack/coordinates.js"
import categories from "../sample_data/categories.json"

export default function AddProduct(props) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      category: '',
      title: '',
      description: '',
      adress: '',
      owner: '',
      contact: ''
    }
  });

  const onSubmit = (data) => {
    data.coords = getCoordinates(data.adress);
    props.onAddProduct(data);
    reset();
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <FormControl margin="dense" sx={{ width: 1 }}>
          <Controller
            name="category"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                onChange={(event, item) => {
                  onChange(item);
                }}
                value={value}
                options={Object.keys(categories)}
                getOptionLabel={(item) => (item ? item : "")}
                isOptionEqualToValue={(option, value) =>
                  value === undefined || value === "" || option === value
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Category"
                    margin="normal"
                    variant="outlined"
                    required
                  />
                )}
              />
            )}
          />
        </FormControl>
        <FormControl margin="dense" sx={{ width: 1 }}>
          <InputLabel htmlFor="title-input">Title</InputLabel>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input id="title-input" aria-describedby="title-input-text" required {...field} />}
          />
        </FormControl>
        <FormControl margin="dense" sx={{ width: 1 }}>
          <InputLabel htmlFor="adress-input">Address</InputLabel>
          <Controller
            name="adress"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input id="adress-input" aria-describedby="adress-input-text"{...field} />}
          />
        </FormControl>

        <FormControl margin="dense" sx={{ width: 1 }}>
          <InputLabel htmlFor="owner-input">Owner</InputLabel>
          <Controller
            name="owner"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input id="owner-input" aria-describedby="owner-input-text"{...field} />}
          />
        </FormControl>

        <FormControl margin="dense" sx={{ width: 1 }}>
          <InputLabel htmlFor="contact-input">Contact</InputLabel>
          <Controller
            name="contact"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input id="contact-input" aria-describedby="contact-input-text"{...field} />}
          />
        </FormControl>

        <FormControl margin="dense" sx={{ width: 1 }}>
          <InputLabel htmlFor="description-input">Description</InputLabel>
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input id="description-input" multiline={true} aria-describedby="description-input-text" {...field} />}
          />
        </FormControl>

        <Button type="submit">Submit</Button>
      </Stack>

    </form>
  );

}
