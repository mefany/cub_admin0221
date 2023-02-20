import { Add } from "@mui/icons-material";
import { Button, useMediaQuery } from "@mui/material";
import { FlexBox } from "components/flex-box";
import SearchInput from "components/SearchInput";
import React from "react"; // ===============================================================

// ===============================================================
const SearchArea = (props) => {
  const { searchPlaceholder, buttonText } = props;
  const downSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleOnChange = (e) => {
    console.log(e.target.value)
  }

  const handelOnClick = () => {

  }

  return (
    <FlexBox mb={2} gap={2} flexWrap="wrap">
      <SearchInput placeholder={searchPlaceholder} onChange={handleOnChange} />
      {buttonText === "" ? null : (
        <Button
          color="success"
          fullWidth={downSM}
          variant="contained"
          sx={{
            minHeight: 40,
          }}
          onClick={handelOnClick}
        >
          {buttonText}
        </Button>
      )}
    </FlexBox>
  );
};

SearchArea.defaultProps = {
  buttonText: "",
  searchPlaceholder: "Search Product...",
};
export default SearchArea;
