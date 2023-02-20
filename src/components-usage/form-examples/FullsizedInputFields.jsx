import { Fragment } from "react";
import { Delete } from "@mui/icons-material";
import { FieldArray, Formik } from "formik";
import { Divider, Grid, IconButton, TextField } from "@mui/material";
import DropZone from "components/DropZone";
import { FlexBetween } from "components/flex-box";
import { H4 } from "components/Typography";
import { BoxButton } from "components/DefaultButton";

const FullsizedInputFields = () => {
  const initialValues = {
    fullwidth_description: "",
    column_two_heading: "",
    column_two_links: [],
    column_three_heading: "",
    column_three_links: [],
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <H4 mb={2}>Fullsized Inputs</H4>
              <TextField
                fullWidth
                color="secondary"
                size="medium"
                onBlur={handleBlur}
                onChange={handleChange}
                name="fullwidth_description"
                label="Fullwidth Description"
                value={values.fullwidth_description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                rows={4}
                multiline
                fullWidth
                color="secondary"
                size="medium"
                onBlur={handleBlur}
                onChange={handleChange}
                name="fullwidth_description"
                label="Fullwidth Description"
                value={values.fullwidth_description}
              />
            </Grid>
            <Grid item xs={12}>
              <DropZone
                onChange={(files) => console.log(files)}
                title="Drag & Drop Files"
              />
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <FieldArray
              name="column_two_links"
              render={(arrayHelper) => (
                <Fragment>
                  <Grid item xs={12}>
                    <FlexBetween>
                      <H4>Two Column Content</H4>
                      <BoxButton
                        color="secondary"
                        variant="contained"
                        onClick={() => {
                          arrayHelper.push({
                            id: Date.now(),
                            name: "",
                            link: "",
                          });
                        }}
                      >
                        Add Item
                      </BoxButton>
                    </FlexBetween>
                  </Grid>

                  <Grid item container spacing={2}>
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        label="Name"
                        color="secondary"
                        size="medium"
                        value="Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        label="Link"
                        color="secondary"
                        size="medium"
                        value="Link"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>

                  {values.column_two_links?.map((item, index) => (
                    <Grid item container spacing={2} key={item.id}>
                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          label="Name"
                          color="secondary"
                          size="medium"
                          value={item.name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name={`column_two_links.${index}.name`}
                        />
                      </Grid>

                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          label="Link"
                          color="secondary"
                          size="medium"
                          value={item.link}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name={`column_two_links.${index}.link`}
                        />
                      </Grid>

                      <Grid item xs={2}>
                        <IconButton onClick={() => arrayHelper.remove(index)}>
                          <Delete />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                </Fragment>
              )}
            />

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <FieldArray
              name="column_three_links"
              render={(arrayHelper) => (
                <Fragment>
                  <Grid item xs={12}>
                    <H4>Three Column Content</H4>
                  </Grid>

                  <Grid item container spacing={2}>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="Name"
                        color="secondary"
                        size="medium"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="Link"
                        color="secondary"
                        size="medium"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="Link"
                        color="secondary"
                        size="medium"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </Fragment>
              )}
            />

            <Grid item xs={12} mb={2}>
              <Divider />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default FullsizedInputFields;
