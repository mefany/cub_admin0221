import { useEffect, useState } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import BazaarCard from "components/BazaarCard";
import BazaarRating from "components/BazaarRating";
import { FlexBox } from "components/flex-box";
import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import { H4 } from "components/Typography";
import GiftBox from "components/icons/GiftBox";
import useWindowSize from "hooks/useWindowSize";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";

import { calculateDiscount, currency } from "lib"; // ========================================================

// ========================================================
const Section13 = ({ shops }) => {
  const rating = 5;
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);
  useEffect(() => {
    if (width < 370) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(4);
  }, [width]);
  return (
    <CategorySectionCreator
      // icon={<GiftBox />}
      title="근처매장"
      seeMoreLink="/shops"
    >
      <Box my="-0.25rem">
        <Carousel totalSlides={shops.length} visibleSlides={visibleSlides}>
          {shops.map(
            ({ shop_uid, shop_name, shop_photo, address_full }) => (
              <Box py={0.5} key={shop_uid}>
                <BazaarCard
                  sx={{
                    p: "1rem",
                  }}
                >
                  <Link href={`/shops/${shop_uid}`} passHref>
                    <a>
                      <HoverBox borderRadius="8px" mb={1}>
                        <LazyImage
                          width={100}
                          height={100}
                          alt={shop_name}
                          src={shop_photo}
                          layout="responsive"
                        />
                      </HoverBox>

                      <H4 fontWeight="600" fontSize="14px" mb={0.5}>
                        {shop_name}
                      </H4>

                      <FlexBox gap={1}>
                        {/* <H4
                          fontWeight="600"
                          fontSize="14px"
                          color="primary.main"
                        >
                          {calculateDiscount(price, discount)}
                        </H4>

                        <H4 fontWeight="600" fontSize="14px" color="grey.600">
                          <del>{currency(price)}</del>
                        </H4> */}
                        <H4
                          fontWeight="600"
                          fontSize="14px"
                          mb={0.5}
                          color="grey.600"
                        >
                          {address_full}
                        </H4>
                        <H4
                          fontWeight="600"
                          fontSize="14px"
                          mb={0.5}
                          color="grey.600"
                        >
                          213m
                        </H4>
                      </FlexBox>
                      {/* <BazaarRating value={rating || 0} color="warn" readOnly /> */}
                    </a>
                  </Link>
                </BazaarCard>
              </Box>
            )
          )}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default Section13;
