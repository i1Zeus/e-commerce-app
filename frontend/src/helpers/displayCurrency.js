const displayINRCurrency = (num) => {
  const formatter = new Intl.NumberFormat("en-IQ", {
    style: "currency",
    currency: "iqd",
    minimumFractionDigits: 2,
  });

  return formatter.format(num);
};

export default displayINRCurrency;
