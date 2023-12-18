// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Category = {
  uuid: string;
  name: string;
  slug: string;
  avatar: string;
};
type Data = {
  code: string | number;
  message: string;
  data: Category[];
  metadata?: object;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    code: 200,
    message: "Successful",
    metadata: {
      total: 200,
      limit: 20,
      offset: 60,
    },
    data: [
      {
        uuid: "111",
        name: "Nuts",
        slug: "nuts",
        avatar: "https://picsum.photos/200",
      },
      {
        uuid: "112",
        name: "Seeds",
        slug: "seeds",
        avatar: "https://picsum.photos/200",
      },
    ],

  });
}
