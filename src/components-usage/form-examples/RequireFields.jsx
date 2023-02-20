import { Grid, TextField } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";

const validationSchema = yup.object().shape({
  name: yup.string().required("이름은 필수 입력값입니다."),
  description: yup.string().required("설명은 필수 입력값입니다."),
  textfiled: yup.string().required("텍스트 필드는 필수 입력값입니다."),
});

const GeneralForm = () => {
  const initialValues = {
    name: "",
    description: "",
    textfiled: "",
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Grid container spacing={3} mb={2}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="secondary"
                size="medium"
                name="name"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="secondary"
                size="medium"
                onBlur={handleBlur}
                onChange={handleChange}
                name="description"
                label="Description"
                value={values.description}
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                rows={6}
                fullWidth
                multiline
                color="secondary"
                size="medium"
                onBlur={handleBlur}
                name="textfiled"
                onChange={handleChange}
                label="Textfiled"
                value={values.textfiled}
                error={!!touched.textfiled && !!errors.textfiled}
                helperText={touched.textfiled && errors.textfiled}
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default GeneralForm;
