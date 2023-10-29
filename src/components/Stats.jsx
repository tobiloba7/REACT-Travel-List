export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  if (items.length == 0)
    return (
      <p className="stats">
        <em>Start packing now you fool.</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You're good to go!"
          : `You have ${numItems} items on your list, and you have already packed
        ${numPacked} || ${percentage}%`}
      </em>
    </footer>
  );
}
