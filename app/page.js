import './globals.css'
// import { gql } from "@apollo/client";


import Body from './../components/Body';




const API = 'https://api-ap-south-1.hygraph.com/v2/clk94bseu1ws701t29jgj1bc0/master'



export default async function page() {

  let blog  = data?.streamss;

  // {console.log(data)}

  return (
    <div className=" px-[1.6rem] md:px-[5rem]" >
      {blog?.map((post) => (
        <Body key={post.index} post={post} />
      ))}
    </div>
  );
}



const { data } = await fetch( API, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
    query MyQuery {
      streamss {
        title
        slug
        streamDate
        coverimage {
          url
        }
        guestname
        description {
          text
          html
        }
      }
    }
     
`,
  }),
  next: { revalidate: 10 },
}).then((res) => res.json());