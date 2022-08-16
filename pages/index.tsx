import TopPageComponent from "../TopPageComponent/TopPageComponent";
import axios from "axios";
import { NextPageContext } from "next";


interface HomePageProps {
  data: [];
  url: string;
};

function Home({ data }: HomePageProps): JSX.Element {

  return (
    <TopPageComponent nearEarth={data} />
  );
};

export default Home;


export interface Context extends NextPageContext {
  resolvedUrl: string;
}

export const API_KEY = 'Edz5U0rdyNOtbLINXjvxWvGwDE0jc2H0wDng3qMB';

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