import { useForm, Controller } from "react-hook-form";
import { InputLabel, Input, Button, FormControl, Stack } from "@mui/material";

function getCoordinates(address) {
  const apiKey = "326804ffeb1e7c6bac46e2c520a0ea75"
  var url = "http://api.positionstack.com/v1/forward?access_key=" + apiKey + "&query=" + address;

  const request = new XMLHttpRequest();

  request.open('GET', url, false);  // `false` makes the request synchronous
  request.send(null);

  if (request.status === 200) {
    console.log(request.responseText);
    var actualData = JSON.parse(request.responseText);

    return [actualData.data[0].latitude, actualData.data[0].longitude];
  } else
    return null
}

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

  const onSubmit = data => {
    data.coords = getCoordinates(data.adress);
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <FormControl margin="dense">
          <InputLabel htmlFor="category-input">Category</InputLabel>
          <Controller
            name="category"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input id="category-input" aria-describedby="category-input-text" margin="dense" {...field} />}
          />
        </FormControl>
        <FormControl margin="dense">
          <InputLabel htmlFor="title-input">Title</InputLabel>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input id="title-input" aria-describedby="title-input-text" {...field} />}
          />
        </FormControl>
        <FormControl margin="dense">
          <InputLabel htmlFor="adress-input">Address</InputLabel>
          <Controller
            name="adress"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input id="adress-input" aria-describedby="adress-input-text"{...field} />}
          />
        </FormControl>
        <FormControl margin="dense">

          <InputLabel htmlFor="owner-input">Owner</InputLabel>
          <Controller
            name="owner"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input id="owner-input" aria-describedby="owner-input-text"{...field} />}
          />
        </FormControl>
        <FormControl margin="dense">

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
