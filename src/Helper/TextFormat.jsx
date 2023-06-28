export const convertLineToBr = (text) => {
  return text.split("\\n").map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    );
  });
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
