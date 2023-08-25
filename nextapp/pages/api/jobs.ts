import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if(req.method === "GET") {

  // }

  // if(req.method === "POST") {

  // }

  res.status(200).send([
    {id: 1,
        title: 'Pilot',
        demand: false,
      },
      {
        id: 2,
        title: 'Doctor',
        demand: true
      },
      {
        id: 3,
        title: 'Nurse',
        demand: true
      },
      {
        id: 4,
        title: 'Clown',
        demand: false,
      },
      {
        id: 5,
        title: 'Teacher',
        demand: true
      },
  ]);
}