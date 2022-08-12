import TopPageComponent from "../TopPageComponent/TopPageComponent";


export default function Post({ json }): JSX.Element {

   return <>
      <TopPageComponent json={json}/>
   </>;
};

const API_KEY = 'Edz5U0rdyNOtbLINXjvxWvGwDE0jc2H0wDng3qMB'

Post.getInitialProps = async () => {
   const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-08-12&api_key=${API_KEY}`)
   const json = await res.json()
   return {
      json
   }
}
