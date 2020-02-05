// eslint-disable-next-line require-jsdoc
export function checkForName(inputText) {
  console.log('::: Running checkForName :::', inputText);
  const names = [
    'Picard',
    'Janeway',
    'Kirk',
    'Archer',
    'Georgiou',
  ];

  if (names.includes(inputText)) {
    alert('Welcome, Captain!');
  }
}
