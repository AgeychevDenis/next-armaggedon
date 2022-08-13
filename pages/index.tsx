import { format } from "date-fns";
import { DataModule } from "../interfaces/data.interface";
import TopPageComponent from "../TopPageComponent/TopPageComponent";

interface HomePageProps {
  data: DataModule
}

function Home({ data }: HomePageProps): JSX.Element {
  const { near_earth_objects } = data;

  return (
    <TopPageComponent nearEarth={near_earth_objects} />
  );
};

export default Home;

const API_KEY = 'Edz5U0rdyNOtbLINXjvxWvGwDE0jc2H0wDng3qMB';
const todaysDate = format(new Date(), 'yyyy-MM-dd');

Home.getInitialProps = async () => {
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${todaysDate}&api_key=${API_KEY}`);
  const data = await res.json();
  return { data };
};