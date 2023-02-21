import Link from "next/link";
import { useEffect, useRef, useState, useTransition } from "react";
import { Box, Button, TextField } from "@mui/material";
import { SearchOutlinedIcon } from "./styled";
import { useRouter } from "next/router";


const GrocerySearchBox = () => {
  const router = useRouter();
  const parentRef = useRef();
  const [_, startTransition] = useTransition();
  const [resultList, setResultList] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    startTransition(() => {
      const value = e.target?.value;
      if (!value) setSearchText('');
      else setSearchText(e.target.value)
    });
  };

  const handleDocumentClick = () => {
    const title = searchText
    if (searchText !== '') {
      router.push({
        pathname: "/product/search",
        query: {
          title: title,
        }
      })
    } else {
      alert('검색어를 입력하세요')
    }

  }

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{
        ref: parentRef,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder={router.pathname.includes('/shops/') ? "매장내 도서를 검색해보세요" : "도서를 검색해보세요."}
        onChange={handleSearch}
        InputProps={{
          sx: {
            height: 44,
            paddingRight: 0,
            borderRadius: 300,
            color: "grey.700",
            overflow: "hidden",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          },
          endAdornment: (
            <Button
              color="primary"
              disableElevation
              variant="contained"
              sx={{
                px: "3rem",
                height: "100%",
                borderRadius: "0 300px 300px 0",
              }}
              onClick={handleDocumentClick}
            >
              Search
            </Button>
          ),
          startAdornment: <SearchOutlinedIcon fontSize="small" />,
        }}
      />

      {resultList.length > 0 && (
        <Link href={`/product/search/`} passHref>
        </Link>

      )}
    </Box>
  );
};

export default GrocerySearchBox;
