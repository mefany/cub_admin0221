import VendorDashboardLayout from "components/layouts/admin-dashboard";

import {
  Box,
  Card,
  Checkbox,
  RadioGroup,
  Radio,
  Divider,
  FormControlLabel,
  Rating,
  Switch,
} from "@mui/material";
import { FlexBox } from "components/flex-box";
import { H3, H4, Span } from "components/Typography";
import DefaultSwitch from "components/DefaultSwitch";

Accordions.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Accordions() {
  return (
    <Box py={4}>
      <H3 mb={2}>Controls</H3>
      <Card
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <H4 mb={2}>CHECKBOX</H4>
        <FlexBox mb={2} flexWrap="wrap" gap={1}>
          <FormControlLabel
            sx={{
              display: "flex",
            }}
            label={<Span color="inherit"> Checked</Span>}
            control={<Checkbox checked size="small" color="secondary" />}
          />
          <FormControlLabel
            sx={{
              display: "flex",
            }}
            label={<Span color="inherit"> Checked</Span>}
            control={<Checkbox size="small" color="secondary" />}
          />
        </FlexBox>
        <Divider
          sx={{
            my: 3,
          }}
        />
        <H4 mb={2}>RATING</H4>
        {[1, 2, 3, 4, 5].map((item) => (
          <Rating
            size="small"
            value={item}
            color="warn"
            sx={{ display: "flex" }}
          />
        ))}
        <Divider
          sx={{
            my: 3,
          }}
        />

        <H4 mb={2}>RADIO BUTTON</H4>
        <FlexBox mb={2} flexWrap="wrap" gap={1}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="checked"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="checked"
              control={<Radio color="secondary" checked />}
              label="Checked"
            />
            <FormControlLabel
              value="unchecked"
              control={<Radio color="secondary" />}
              label="Unchecked"
            />
          </RadioGroup>
        </FlexBox>
        <Divider
          sx={{
            my: 3,
          }}
        />

        <H4 mb={2}>SWITCH</H4>
        <FlexBox mb={2} flexWrap="wrap" gap={1}>
          <Switch {...label} defaultChecked color="secondary" />
          <Switch {...label} color="secondary" />
          <Switch {...label} disabled defaultChecked color="secondary" />
          <Switch {...label} disabled />
        </FlexBox>
        <FlexBox mb={2} flexWrap="wrap" gap={1}>
          <DefaultSwitch color="secondary" defaultChecked />
          <DefaultSwitch color="secondary" />
          <DefaultSwitch color="secondary" disabled defaultChecked />
          <DefaultSwitch color="secondary" disabled />
        </FlexBox>
        <Divider
          sx={{
            my: 3,
          }}
        />
      </Card>
    </Box>
  );
}
