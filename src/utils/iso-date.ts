const getDate = (): { from: string; to: string } => {
  const date = new Date();
  const lastYear = new Date(
    `${date.getFullYear() - 1}-${date.getMonth() + 1}-${date.getDate()}`
  );
  return { from: lastYear.toISOString(), to: date.toISOString() };
};

export default getDate;
