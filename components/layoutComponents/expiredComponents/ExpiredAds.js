import Expired from "./Expired";
import Skeleto from "../../mainPageComponents/Skeleton";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ExpiredAds = ({ product }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const skeleBig = [<Skeleto />, <Skeleto />, <Skeleto />, <Skeleto />];

  return (
    <div className="mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-3 grid-flow-row-dense">
      {loading
        ? product?.map((product) => (
            <Expired key={product.id} product={product} />
          ))
        : skeleBig.map((ske, index) => (
            <>
              <div className="hidden sm:block lg:block" key={index}>
                {ske}
              </div>
            </>
          ))}
      <div className="block sm:hidden lg:hidden">
        <Stack spacing={1} className="block sm:hidden lg:hidden">
          <Skeleton variant="rectangular" width={"100%"} height={170} />
          <Skeleton variant="text" width={"100%"} height={20} />
          <Skeleton variant="text" width={"100%"} height={20} />
          <div className="flex space-x-36">
            <Skeleton
              variant="rectangular"
              className="mr-3"
              width={100}
              height={60}
            />
            <Skeleton variant="rectangular" width={100} height={60} />
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default ExpiredAds;
