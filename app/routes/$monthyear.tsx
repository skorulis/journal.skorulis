import { useParams } from "@remix-run/react";
import { useLoaderData, json } from "@remix-run/react";
import { JournalMonth } from "~/model/JournalModel";
import Journal from "~/ui/journal";

export default function Index() {

  const { monthyear } = useParams();
  const month: JournalMonth = useLoaderData();

  return (
    <div>
      {Journal(month)}
    </div>
  );
}

export const loader = async ({ params }: { params: { monthyear: string } }) => {
  const post = await getPostById(params.monthyear);
  return json(post);
};

// Load data
const getPostById = async (id: string) => {
  const res = await fetch(`https://pub-02a71505f3f24f5db7e61eab54a48a69.r2.dev/${id}.json`);
  const data = await res.json()
  return data
};
