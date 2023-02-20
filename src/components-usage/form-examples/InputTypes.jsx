import { Formik } from "formik";
import { Grid, TextField } from "@mui/material";
import { H4 } from "components/Typography";
import PlayStore from "components/icons/PlayStore";

import { FlexBox } from "components/flex-box";

const TopbarForm = () => {
  const initialValues = {
    phone: "12345678910",
    email: "ui.lib.drive@gmail.com",
    half: 10,
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <H4>Input Types</H4>
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="phone"
                color="secondary"
                size="medium"
                label="Phone"
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                placeholder="0000000000"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="secondary"
                name="email"
                size="medium"
                label="Email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="secondary"
                size="medium"
                type="number"
                name="half"
                onBlur={handleBlur}
                label="number"
                onChange={handleChange}
                value={values.half}
                error={!!touched.half && !!errors.half}
                helperText={touched.half && errors.half}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="secondary"
                size="medium"
                type="date"
                name="half"
                onBlur={handleBlur}
                label="date"
                onChange={handleChange}
                value={values.half}
                error={!!touched.half && !!errors.half}
                helperText={touched.half && errors.half}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="secondary"
                size="medium"
                type="password"
                name="half"
                onBlur={handleBlur}
                label="password"
                onChange={handleChange}
                value={values.half}
                error={!!touched.half && !!errors.half}
                helperText={touched.half && errors.half}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="secondary"
                size="medium"
                type="search"
                name="half"
                onBlur={handleBlur}
                label="search"
                onChange={handleChange}
                value="search text"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="secondary"
                size="medium"
                name="play_store"
                label="with icon"
                value={values.play_store}
                onChange={handleChange}
                placeholder="https://example.com"
                InputProps={{
                  startAdornment: (
                    <PlayStore
                      fontSize="small"
                      color="info"
                      sx={{
                        mr: 1,
                      }}
                    />
                  ),
                }}
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default TopbarForm;
