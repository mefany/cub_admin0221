import { Formik } from "formik";
import { Grid, TextField } from "@mui/material";
import { H4 } from "components/Typography";

const HalfInputfield = () => {
  const initialValues = {
    half: 10,
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <H4>Half Input Field</H4>
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="secondary"
                size="medium"
                type="number"
                name="half"
                onBlur={handleBlur}
                label="Half Input Field"
                onChange={handleChange}
                value={values.half}
                error={!!touched.half && !!errors.half}
                helperText={touched.half && errors.half}
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default HalfInputfield;
