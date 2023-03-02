import axios from "axios";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  axios
    .get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=HNT&CMC_PRO_API_KEY=35d500c6-ef34-43f3-a692-4650df1683c7`
    )
    .then((response: any) => {
      const hntData = response.data.data.HNT;
      console.log(`Name: ${hntData.name}`);
      const price = hntData.quote.USD.price.toFixed(2);
      const mainData: any = { data: price };
      res.json(mainData);
    })
    .catch((error) => {
      console.log(`Error fetching HNT data: ${error}`);
    });
}
