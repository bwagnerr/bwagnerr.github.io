import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";

export default function PostFooter({ date, author }) {
  return (
    <>
      <hr className="mb-4" />
      <div className="max-w-2xl mx-auto my-auto flex flex-row justify-between flex-wrap">
        <div className="mb-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-4 text-md self-center">
          Posted{" "}
          <DateFormatter customClasses="font-semibold" dateString={date} />
        </div>
      </div>
    </>
  );
}
