import { useState } from "react";
import dynamic from "next/dynamic";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Card, MenuItem, Select, styled, useTheme } from "@mui/material";
import { H5 } from "components/Typography";
import { FlexBetween } from "components/flex-box";
import { analyticsChartOptions } from "./chartsOptions"; // apext chart instance

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const categories = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
]; // styled component

const StyledSelect = styled(Select)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: theme.palette.grey[600],
  "& fieldset": {
    border: "0 !important",
  },
  "& .MuiSelect-select": {
    padding: 0,
    paddingRight: "8px !important",
  },
}));

const Analytics = () => {
  const theme = useTheme();
  const [selectType, setSelectType] = useState("yearly");
  const series = [
    {
      name: "매출",
      data: [
        15000, 45000, 12000, 50000, 75000, 13000, 30000, 99000, 75000, 90000,
        55000, 15000,
      ],
    },
    {
      name: "유저",
      data: [
        1500, 48000, 19000, 59000, 25000, 9000, 36000, 9000, 79000, 70000,
        57000, 5000,
      ],
    },
  ];
  return (
    <Card
      sx={{
        p: 3,
      }}
    >
      <FlexBetween>
        <H5>매출추이</H5>

        <StyledSelect
          value={selectType}
          IconComponent={() => <KeyboardArrowDown />}
          onChange={(e) => setSelectType(e.target.value)}
        >
          <MenuItem value="yearly">년간</MenuItem>
          <MenuItem value="monthly">월간</MenuItem>
          <MenuItem value="Weekily">주간</MenuItem>
        </StyledSelect>
      </FlexBetween>

      <ReactApexChart
        type="bar"
        height={300}
        series={series}
        options={analyticsChartOptions(theme, categories)}
      />
    </Card>
  );
};

export default Analytics;
