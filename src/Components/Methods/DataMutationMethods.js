export const amount = (prices, currentCurrency) => {
  const price = prices.find(
    ({ currency }) => currency === currentCurrency
  );
  return price.amount;
}
export const convertToPlain = (html) => {

  // Create a new div element
  var tempDivElement = document.createElement("div");

  // Set the HTML content with the given value
  tempDivElement.innerHTML = html;

  // Retrieve the text property of the element 
  return tempDivElement.textContent || tempDivElement.innerText || "";
}
export const strip = (html) => {
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}
export const InjectHtml = (html) => {
  let new_element = document.createRange()
  .createContextualFragment(html);
  return new_element;
}
