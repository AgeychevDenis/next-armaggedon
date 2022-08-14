import TopPageComponent from "../TopPageComponent/TopPageComponent";
import axios from "axios";
import { NextPageContext } from "next";
import { setDangerous, setKmRange, setLunarRange } from "../redux/slice/productSlice";
import { useSelector, useDispatch } from "react-redux";

interface HomePageProps {
  data: any[];
  url: string;
};

function Home({ data, url }: HomePageProps): JSX.Element {
  const dispatch = useDispatch();
  const { sort, kmRange, lunarRange }: any = useSelector((state) => ({
    sort: state.product.sort,
    kmRange: state.product.range.km,
    lunarRange: state.product.range.lunar
  }));
 
 

  const onDangerous = () => {
    dispatch(setDangerous());
  };

  const onKm = () => {
    dispatch(setKmRange());
  };

  const onLunar = () => {
    dispatch(setLunarRange());
  };

  return (
    <TopPageComponent
      nearEarth={data}
      onDangerous={onDangerous}
      onKm={onKm}
      onLunar={onLunar}
      sort={sort}
      kmRange={kmRange}
      lunarRange={lunarRange}
    />
  );
};

export default Home;


export interface Context extends NextPageContext {
  resolvedUrl: string;
}

const API_KEY = 'Edz5U0rdyNOtbLINXjvxWvGwDE0jc2H0wDng3qMB';

export const getServerSideProps = async (ctx: Context): Promise<any> => {
  function getTodayDate() {
    const date = new Date();
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1 < 10
        ?
        "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? "0" + date.getDate()
          :
          date.getDate())
    );
  }
  try {
    const { data } = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getTodayDate()}&api_key=${API_KEY}`
    );
    const url = ctx.resolvedUrl;
    return {
      props: {
        data: [].concat
          .apply([], Object.values(data.near_earth_objects))
          .reverse(),
        url: url,
      },
    };
  } catch (error) {
    alert("Ошибка");
    return {
      props: {
        data: [],
        url: "",
      },
    };
  }
};