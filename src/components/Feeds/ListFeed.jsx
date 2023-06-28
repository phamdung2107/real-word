import Feed from "./Feed";

export default function ListFeed({ feeds }) {
  return (
    <ul className="list">
      {feeds.map((feed, index) => (
        <Feed key={`feeds-${index}`} feed={feed} />
      ))}
    </ul>
  );
}
